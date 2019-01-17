var teams = [
'Atlanta Hawks','Boston Celtics','Brooklyn Nets','Charlotte Hornets','Dallas Mavericks','Denver Nuggets','Detroit Pistons','Golden State Warriors','Indiana Pacers','Houston Rockets','LA Clippers','Los Angeles Lakers','Memphis Grizzlies','Miami Heat','Milwaukee Bucks','Minnesota Timberwolves','New Orleans Pelicans','New York Knicks','Oklahoma City Thunder','Orlando Magic','Philadelphia 76ers','Phoenix Suns','Portland Trail Blazers','Sacramento Kings','San Antonio Spurs','Toronto Raptors','Utah Jazz','Washington Wizards'
];
var games = [
'Dominique Wilkins (882)',"'John Havlicek (1,270)'",'Buck Williams (635)','Dell Curry (701)',"'Dirk Nowitzki (1,482)'",'Alex English (837)',"'Joe Dumars (1,018)'",'Chris Mullin (807)',"'Reggie Miller (1,389)'","'Hakeem Olajuwon (1,177)'",'DeAndre Jordan (750)',"'Kobe Bryant (1,346)'",'Mike Conley (757)','Dwyane Wade (905)','Junior Bridgeman (711)','Kevin Garnett (970)','David West (530)',"'Patrick Ewing (1,039)'",'Gary Payton (999)','Nick Anderson (692)',"'Hal Greer (1,122)'",'Alvan Adams (988)','Clyde Drexler (867)','Sam Lacey (888)',"'Tim Duncan (1,392)'",'DeMar DeRozan (675)',"'John Stockton (1,504)'",'Wes Unseld (984)',"'Dirk Nowitzki (1,484)'",'Mike Conley (760)','Dwyane Wade (909)'
];
var points = [
'Dominique Wilkins (26.4)','Isaiah Thomas (24.7)','Vince Carter (23.6)','Glen Rice (23.5)','Mark Aguirre (24.6)','Alex English (25.9)','Bob Lanier (22.7)','Wilt Chamberlain (41.5)','Victor Oladipo (22.3)','James Harden (28.3)','World Free (29.4)','Elgin Baylor (27.4)','Shareef Abdur-Rahim (20.8)','LeBron James (26.9)','Kareem Abdul-Jabbar (30.4)','Karl-Anthony Towns (21.7)','Anthony Davis (23.9)','Bob McAdoo (26.7)','Kevin Durant (27.4)','Tracy McGrady (28.1)','Wilt Chamberlain (27.6)','Charlie Scott (24.8)','Kiki Vandeweghe (23.5)','Oscar Robertson (29.3)','George Gervin (27.3)','Vince Carter (23.4)','Adrian Dantley (29.6)','Walt Bellamy (27.6)','James Harden (28.4)','Victor Oladipo (22.0)'
];
var assists = [
'Mookie Blaylock (7.3)','Rajon Rondo (8.5)','Jason Kidd (9.1)','Muggsy Bogues (8.8)','Jason Kidd (8.4)','Nick Van Exel (8.4)','Kevin Porter (10.1)','Tim Hardaway (9.3)','Mark Jackson (8.1)','James Harden (7.8)','Chris Paul (9.8)','Magic Johnson (11.2)','Mike Bibby (7.8)','Sherman Douglas (7.9)','Oscar Robertson (7.5)','Ricky Rubio (8.5)','Chris Paul (9.9)','Mark Jackson (8.0)','Lenny Wilkens (9.0)','Scott Skiles (7.2)','Ben Simmons (8.1)','Jason Kidd (9.7)','Rod Strickland (8.2)','Oscar Robertson (10.3)','Damon Stoudamire (8.8)','John Stockton (10.5)','John Wall (9.2)','Ben Simmons (8.2)'
];
var steals = [
'Mookie Blaylock (2.6)','Rajon Rondo (1.9)','Micheal Ray Richardson (2.7)','Eddie Jones (2.8)','Jason Kidd (1.9)','Lafayette Lever (2.5)','M.L. Carr (2.1)','Baron Davis (2.0)','Micheal Williams (2.5)','Clyde Drexler (1.9)','Chris Paul (2.2)','Eddie Jones (2.1)','Greg Anthony (1.8)','Sherman Douglas (1.7)','Alvin Robertson (2.7)','Ricky Rubio (2.1)','Chris Paul (2.4)','Micheal Ray Richardson (2.6)','Slick Watts (2.5)','Anfernee Hardaway (1.9)','Allen Iverson (2.3)','Ron Lee (2.2)','Clyde Drexler (2.1)','Metta World Peace (2.2)','Alvin Robertson (2.9)','Doug Christie (2.1)','John Stockton (2.2)','Tom Gugliotta (2.0)'
];
var rebounds = [
'Bob Pettit (16.2)','Bill Russell (22.5)','Buck Williams (11.9)','Emeka Okafor (10.7)','Tyson Chandler (10.4)','Dikembe Mutombo (12.3)','Andre Drummond (13.5)','Wilt Chamberlain (25.1)','Jermaine ONeal (9.6)','Moses Malone (15.0)','Elmore Smith (13.8)','Wilt Chamberlain (19.2)','Zach Randolph (10.2)','Hassan Whiteside (12.2)','Kareem Abdul-Jabbar (15.3)','Kevin Love (12.2)','Tyson Chandler (11.3)','Walt Bellamy (13.3)','Spencer Haywood (12.1)','Dwight Howard (13.0)','Wilt Chamberlain (23.9)','Paul Silas (12.1)','Bill Walton (13.5)','Jerry Lucas (19.1)','Dennis Rodman (17.1)','Chris Bosh (9.4)','Truck Robinson (14.9)','Walt Bellamy (16.6)'
];
var blocks = [
'Dikembe Mutombo (3.2)','Kevin McHale (1.7)','Shawn Bradley (3.8)','Alonzo Mourning (3.2)','Shawn Bradley (2.1)','Dikembe Mutombo (3.8)','Ben Wallace (2.3)','Manute Bol (3.7)','Jermaine ONeal (2.4)','Hakeem Olajuwon (3.2)','Benoit Benjamin (2.8)','Elmore Smith (3.9)','Pau Gasol (1.8)','Alonzo Mourning (2.7)','Elmore Smith (2.7)','Eddie Griffin (1.8)','Anthony Davis (2.4)','Patrick Ewing (2.7)','Serge Ibaka (2.5)','Shaquille ONeal (2.8)','Shawn Bradley (3.2)','Larry Nance (1.9)','Theo Ratliff (2.6)','Duane Causwell (1.6)','George Johnson (3.3)','Marcus Camby (2.9)','Mark Eaton (3.5)','Manute Bol (3.8)'
]
