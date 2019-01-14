from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import pymongo
import scrape_nba

app = Flask(__name__)

#app.add_url_rule('/photos/<path:filename>',view_func=app.send_static_file) 
# Initialize PyMongo to work with MongoDBs
#conn = 'mongodb://localhost:27017'
#client = pymongo.MongoClient(conn)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/nba_db"
mongo = PyMongo(app)


# Define database and collection
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["nba_db"]
mycol = mydb["team_leaders"]

#app.add_url_rule('/photos/<path:filename>', endpoint='photos', view_func=app.send_static_file)
@app.route("/")
def index():
    team_leaders = mongo.db.team_leaders.find_one()
    return render_template("index.html", team_leaders=team_leaders)
    # return render_template("logic.js", team_leaders=team_leaders)



@app.route("/scrape")
def scraper():
    team_leaders = mongo.db.team_leaders
    team_leaders_data = scrape_nba.scrape()
    #team_leaders.update({}, team_leaders_data, upsert=True)
    return redirect("/", code=302)

@app.route("/data.html")
def data_table():
    return render_template("data.html", code=302)


if __name__ == "__main__":
    app.run(debug=True)

