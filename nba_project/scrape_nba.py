from splinter import Browser
from bs4 import BeautifulSoup
import pymongo
import json
import csv

# Define database and collection
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["nba_db"]
mycol = mydb["team_leaders"]

url_list = [
"https://stats.nba.com/team/1610612737/franchise-leaders/",
"https://stats.nba.com/team/1610612738/franchise-leaders/",
"https://stats.nba.com/team/1610612751/franchise-leaders/",
"https://stats.nba.com/team/1610612766/franchise-leaders/",
"https://stats.nba.com/team/1610612741/franchise-leaders/"
"https://stats.nba.com/team/1610612739/franchise-leaders/",
"https://stats.nba.com/team/1610612742/franchise-leaders/",
"https://stats.nba.com/team/1610612743/franchise-leaders/",
"https://stats.nba.com/team/1610612765/franchise-leaders/",
"https://stats.nba.com/team/1610612744/franchise-leaders/",
"https://stats.nba.com/team/1610612745/franchise-leaders/",
"https://stats.nba.com/team/1610612754/franchise-leaders/",
"https://stats.nba.com/team/1610612746/franchise-leaders/",
"https://stats.nba.com/team/1610612747/franchise-leaders/",
"https://stats.nba.com/team/1610612763/franchise-leaders/",
"https://stats.nba.com/team/1610612748/franchise-leaders/",
"https://stats.nba.com/team/1610612749/franchise-leaders/",
"https://stats.nba.com/team/1610612750/franchise-leaders/",
"https://stats.nba.com/team/1610612740/franchise-leaders/",
"https://stats.nba.com/team/1610612752/franchise-leaders/",
"https://stats.nba.com/team/1610612760/franchise-leaders/",
"https://stats.nba.com/team/1610612753/franchise-leaders/",
"https://stats.nba.com/team/1610612755/franchise-leaders/",
"https://stats.nba.com/team/1610612756/franchise-leaders/",
"https://stats.nba.com/team/1610612757/franchise-leaders/",
"https://stats.nba.com/team/1610612758/franchise-leaders/",
"https://stats.nba.com/team/1610612759/franchise-leaders/",
"https://stats.nba.com/team/1610612761/franchise-leaders/",
"https://stats.nba.com/team/1610612762/franchise-leaders/",
"https://stats.nba.com/team/1610612764/franchise-leaders/"
]
def init_browser():
    # @NOTE: Replace the path with your actual path to the chromedriver
    executable_path = {"executable_path": "/usr/local/bin/chromedriver"}
    return Browser("chrome", **executable_path, headless=False)

def scrape():
    browser = init_browser()
    teamnames = []
    gamesplayedleads=[]
    pointleads = []
    assistleads=[]
    stealleads = []
    reboundleads = []
    blockleads = []
    blockleads_2=[]

    for url in url_list:
        team_leaders = {}
        try:
            browser.visit(url)
            html = browser.html
            soup = BeautifulSoup(html, 'html.parser')
            leaders = soup.find_all(class_="franchise-leaders__name")
            leader_stats = soup.find_all(class_="franchise-leaders__stat")
            city = soup.find(class_='stats-team-summary__city').text
            team_only = soup.find(class_='stats-team-summary__name').text
            city_and_team = city + " " + team_only

            #team_leaders["teamname"]= f'"{soup.find(class_='stats-team-summary__city').text + " " +soup.find(class_='stats-team-summary__name').text}"'
            #team_leaders["teamname"]= ("'"+city_and_team+"'")
            team_leaders["teamname"]= ("'"+city_and_team+"'")
            teamnames.append(team_leaders["teamname"])

            team_leaders["gamesplayedleader"]= ("'"+leaders[0].text  +f' ({leader_stats[0].text})'+"'")
            gamesplayedleads.append(team_leaders["gamesplayedleader"])
            
            team_leaders["pointsleader"]= ("'"+leaders[10].text +f' ({leader_stats[10].text})'+"'")
            pointleads.append(team_leaders["pointsleader"])
            
            team_leaders["assistsleader"]= ("'"+leaders[20].text +f' ({leader_stats[20].text})'+"'")
            assistleads.append(team_leaders["assistsleader"])
            
            team_leaders["stealsleader"]= ("'"+leaders[30].text +f' ({leader_stats[30].text})'+"'")
            stealleads.append(team_leaders["stealsleader"])
            
            team_leaders["reboundsleader"] = str(leaders[60].text +f' ({leader_stats[60].text})')
            if "'" in team_leaders["reboundsleader"]:
                team_leaders["reboundsleader"]=team_leaders["reboundsleader"].replace("'","")
            team_leaders["reboundsleader"]= "'"+team_leaders["reboundsleader"]+"'"
            reboundleads.append(team_leaders["reboundsleader"])
            
            team_leaders["blocksleader"] = str(leaders[70].text +f' ({leader_stats[70].text})')
            if "'" in team_leaders["blocksleader"]:
                team_leaders["blocksleader"]=team_leaders["blocksleader"].replace("'","")
            team_leaders["blocksleader"]= "'"+team_leaders["blocksleader"]+"'"
            blockleads.append(team_leaders["blocksleader"])
            
            mycol.insert_one(team_leaders)
            print("-------------------------------------------------")
            #return team_leaders
    
        except Exception as e:
            print(e)
            print("-------------------------------------------------")
    print("LOOP COMPLETE")
    py_team_names = mycol.distinct("teamname")
    py_games_played= mycol.distinct("gamesplayedleader")
    py_points = mycol.distinct("pointsleader")
    py_assists = mycol.distinct("assistsleader")
    py_steals = mycol.distinct("stealsleader")
    py_rebounds = mycol.distinct("reboundsleader")
    py_blocks = mycol.distinct("blocksleader")



    with open("static/js/data_2.js",'w') as resultFile:
        wr = csv.writer(resultFile, dialect='excel')
        wr.writerow(["var teams = ["])
        wr.writerow(py_team_names)
        wr.writerow(["];"])
        wr.writerow(["var games = ["])
        wr.writerow(py_games_played)
        wr.writerow(["];"])
        wr.writerow(["var points = ["])
        wr.writerow(py_points)
        wr.writerow(["];"])
        wr.writerow(["var assists = ["])
        wr.writerow(py_assists)
        wr.writerow(["];"])
        wr.writerow(["var steals = ["])
        wr.writerow(py_steals)
        wr.writerow(["];"])
        wr.writerow(["var rebounds = ["])
        wr.writerow(py_rebounds)
        wr.writerow(["];"])
        wr.writerow(["var blocks = ["])
        wr.writerow(py_blocks)
        wr.writerow(["]"])
