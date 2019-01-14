

// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  minZoom: 4.6,
  maxZoom: 6,
  zoom: 4.5
 });



L.easyButton( '<span class="star">&starf;</span>', function(){
window.location.href = "/scrape"}, 'Scrape Data from NBA.com').addTo(myMap);

L.easyButton( '<span class="target"> &CirclePlus;</span>', function(){
  window.location.href = "data.html";
},'See the Stat Table').addTo(myMap);

 
 var HawksIcon = L.icon({
    iconUrl : "static/photos/AtlantaHawks.png",
    iconSize:     [38, 65], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var CelticsIcon = L.icon({
    iconUrl : "static/photos/BostonCeltics.png",
    iconSize:     [48, 65], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var NetsIcon = L.icon({
    iconUrl : "static/photos/BrooklynNets.png",
    iconSize:     [43, 65], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var HornetsIcon = L.icon({
    iconUrl : "static/photos/CharlotteHornets.png",
    iconSize:     [68, 85], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var BullsIcon = L.icon({
    iconUrl : "static/photos/ChicagoBulls.png",
    iconSize:     [48, 75], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
  var CavaliersIcon = L.icon({
    iconUrl : "static/photos/ClevelandCavaliers.png",
    iconSize:     [48, 85], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
   var MavericksIcon = L.icon({
    iconUrl : "static/photos/DallasMavericks.png",
    iconSize:     [48, 75], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
    var NuggetsIcon = L.icon({
    iconUrl : "static/photos/DenverNuggets.png",
    iconSize:     [48, 65], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var PistonsIcon = L.icon({
    iconUrl : "static/photos/DetroitPistons.png",
    iconSize:     [48, 75], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
  var WarriorsIcon = L.icon({
    iconUrl : "static/photos/GoldenStateWarriors.png",
    iconSize:     [48, 70], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var RocketsIcon = L.icon({
    iconUrl : "static/photos/HoustonRockets.png",
    iconSize:     [58, 85], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var PacersIcon = L.icon({
    iconUrl : "static/photos/IndianaPacers.png",
    iconSize:     [38, 75], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var ClippersIcon = L.icon({
    iconUrl : "static/photos/LosAngelesClippers.png",
    iconSize:     [48, 65], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var LakersIcon = L.icon({
    iconUrl : "static/photos/LosAngelesLakers.png",
    iconSize:     [60, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var GrizzliesIcon = L.icon({
    iconUrl : "static/photos/MemphisGrizzlies.png",
    iconSize:     [48, 75], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var HeatIcon = L.icon({
    iconUrl : "static/photos/MiamiHeat.png",
    iconSize:     [48, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var BucksIcon = L.icon({
    iconUrl : "static/photos/MilwaukeeBucks.png",
    iconSize:     [48, 75], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var TimberwolvesIcon = L.icon({
    iconUrl : "static/photos/MinnesotaTimberwolves.png",
    iconSize:     [48, 65], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var PelicansIcon = L.icon({
    iconUrl : "static/photos/NewOrleansPelicans.png",
    iconSize:     [58, 105], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var KnicksIcon = L.icon({
    iconUrl : "static/photos/NewYorkKnicks.png",
    iconSize:     [53, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
  var ThunderIcon = L.icon({
    iconUrl : "static/photos/OklahomaCityThunder.png",
    iconSize:     [78, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var MagicIcon = L.icon({
    iconUrl : "static/photos/OrlandoMagic.png",
    iconSize:     [58, 115], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var SixersIcon = L.icon({
    iconUrl : "static/photos/Philadelphia76ers.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var SunsIcon = L.icon({
    iconUrl : "static/photos/PhoenixSuns.png",
    iconSize:     [48, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var TrailblazersIcon = L.icon({
    iconUrl : "static/photos/PortlandTrailBlazers.png",
    iconSize:     [48, 70], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var KingsIcon = L.icon({
    iconUrl : "static/photos/SacramentoKings.png",
    iconSize:     [48, 70], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var SpursIcon = L.icon({
    iconUrl : "static/photos/SanAntonioSpurs.png",
    iconSize:     [58, 85], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var RaptorsIcon = L.icon({
    iconUrl : "static/photos/TorontoRaptors.png",
    iconSize:     [38, 75], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
  var JazzIcon = L.icon({
    iconUrl : "static/photos/UtahJazz.png",
    iconSize:     [58, 85], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var WizardsIcon = L.icon({
    iconUrl : "static/photos/WashingtonWizards.png",
    iconSize:     [38, 65], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 
 // Add a tile layer
 L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
 }).addTo(myMap);
 
 // An array containing each city's name, location, and population
 var cities = [{
  team_name: teams[0],
  stadium_name: "State Farm Arena",
  location: [33.7573, -84.3963],
  icons: HawksIcon,
  url: "https://stats.nba.com/team/1610612737/franchise-leaders/",
  gp_lead:games[0],
  pt_lead: points[0],
  ast_lead: assists[0],
  reb_lead: rebounds[0],
  stl_lead:steals[0],
  blk_lead:blocks[0],
  stadium_image: "static/photos/AtlantaHawksStadium.png"
 },
 {
  team_name: teams[1],
  stadium_name: "TD Garden",
  location: [42.3662, -71.0621],
  icons: CelticsIcon,
  url: "https://stats.nba.com/team/1610612738/franchise-leaders/",
  gp_lead:games[1].slice(1,-1),
  pt_lead: points[1],
  ast_lead: assists[1],
  reb_lead: rebounds[1],
  stl_lead:steals[1],
  blk_lead:blocks[1],
  stadium_image: "static/photos/BostonCelticsStadium.png"
 },
 {
  team_name: teams[2],
  stadium_name: "Barclays Center",
  location: [40.6826, -72.9754],
  icons: NetsIcon,
  url: "https://stats.nba.com/team/1610612751/franchise-leaders/",
  gp_lead:games[2],
  pt_lead: points[2],
  ast_lead: assists[2],
  reb_lead: rebounds[2],
  stl_lead:steals[2],
  blk_lead:blocks[2],
  stadium_image: "static/photos/BrooklynNetsStadium.png"
 },
 {
  team_name: teams[3],
  stadium_name: "Spectrum Center",
  location: [35.2251, -80.8392],
  icons: HornetsIcon,
  url: "https://stats.nba.com/team/1610612766/franchise-leaders/",
  gp_lead:games[3],
  pt_lead: points[3],
  ast_lead: assists[3],
  reb_lead: rebounds[3],
  stl_lead:steals[3],
  blk_lead:blocks[3],
  stadium_image: "static/photos/CharlotteHornetsStadium.png"
 },
 {
  team_name: "Chicago Bulls",
  stadium_name: "United Center",
  location: [41.8807, -87.6742],
  icons: BullsIcon,
  url: "https://stats.nba.com/team/1610612741/franchise-leaders/",
  gp_lead: "Michael Jordan (930)",
  pt_lead: "Michael Jordan (31.5)",
  ast_lead: "Ennis Whatley (7.0)",
  reb_lead: "Dennis Rodman (15.3)",
  stl_lead: "Michael Jordan (2.5)",
  blk_lead: "Artis Gilmore (2.1)",
  stadium_image: "static/photos/ChicagoBullsStadium.png"
 },
 {
  team_name: "Cleveland Cavaliers",
  stadium_name: "Quicken Loans Arena",
  location: [41.4965, -81.6882],
  icons: CavaliersIcon,
  url: "https://stats.nba.com/team/1610612739/franchise-leaders/",
  gp_lead:"Lebron James (849)",
  pt_lead: "Lebron James (27.2)",
  ast_lead: "Andre Miller (8.2)",
  reb_lead: "Rick Roberson (12.0)",
  stl_lead: "Ron Harper (2.3)",
  blk_lead: "Larry Nance (2.5)",
  stadium_image: "static/photos/ClevelandCavaliersStadium.png"
 },
 {
  team_name: teams[4],
  stadium_name: "American Airlines Center",
  location: [32.7905, -96.8104],
  icons: MavericksIcon,
  url: "https://stats.nba.com/team/1610612742/franchise-leaders/",
  gp_lead:games[4].slice(1,-1),
  pt_lead: points[4],
  ast_lead: assists[4],
  reb_lead: rebounds[4],
  stl_lead:steals[4],
  blk_lead:blocks[4],
  stadium_image: "static/photos/DallasMavericksStadium.png"
 },
 {
  team_name: teams[5],
  stadium_name: "Pepsi Center",
  location: [39.7487, -105.0077],
  icons: NuggetsIcon,
  url: "https://stats.nba.com/team/1610612743/franchise-leaders/",
  gp_lead:games[5],
  pt_lead: points[5],
  ast_lead: assists[5],
  reb_lead: rebounds[5],
  stl_lead:steals[5],
  blk_lead:blocks[5],
  stadium_image: "static/photos/DenverNuggetsStadium.png"
 },
 {
  team_name: teams[6],
  stadium_name: "Little Caesars Arena",
  location: [42.3410, -83.0550],
  icons: PistonsIcon,
  url: "https://stats.nba.com/team/1610612765/franchise-leaders/",
  gp_lead:games[6].slice(1,-1),
  pt_lead: points[6],
  ast_lead: assists[6],
  reb_lead: rebounds[6],
  stl_lead:steals[6],
  blk_lead:blocks[6],
  stadium_image: "static/photos/DetroitPistonsStadium.png"
 },
 {
  team_name: teams[7],
  stadium_name: "Oracle Arena",
  location: [37.7503, -122.5030],
  icons: WarriorsIcon,
  url: "https://stats.nba.com/team/1610612744/franchise-leaders/",
  gp_lead:games[7],
  pt_lead: points[7],
  ast_lead: assists[7],
  reb_lead: rebounds[7],
  stl_lead:steals[7],
  blk_lead:blocks[7],
  stadium_image: "static/photos/GoldenStateWarriorsStadium.png"
 },
 {
  team_name: teams[9],
  stadium_name: "Toyota Center",
  location: [29.7508, -95.3621],
  icons: RocketsIcon,
  url: "https://stats.nba.com/team/1610612745/franchise-leaders/",
  gp_lead:games[9].slice(1,-1),
  pt_lead: points[9],
  ast_lead: assists[9],
  reb_lead: rebounds[9],
  stl_lead:steals[9],
  blk_lead:blocks[9],
  stadium_image: "static/photos/HoustonRocketsStadium.png"
 },
 {
  team_name: teams[8],
  stadium_name: "Bankers Life Fieldhouse",
  location: [39.7640, -86.1555],
  icons: PacersIcon,
  url: "https://stats.nba.com/team/1610612754/franchise-leaders/",
  gp_lead:games[8].slice(1,-1),
  pt_lead: points[8],
  ast_lead: assists[8],
  reb_lead: rebounds[8],
  stl_lead:steals[8],
  blk_lead:blocks[8],
  stadium_image: "static/photos/IndianaPacersStadium.png"
 },
 {
  team_name: teams[10],
  stadium_name: "Staples Center",
  location: [32.8430, -117.0673],
  icons: ClippersIcon,
  url: "https://stats.nba.com/team/1610612746/franchise-leaders/",
  gp_lead:games[10],
  pt_lead: points[10],
  ast_lead: assists[10],
  reb_lead: rebounds[10],
  stl_lead:steals[10],
  blk_lead:blocks[10],
  stadium_image: "static/photos/LosAngelesClippersStadium.png"
 },
 {
  team_name: teams[11],
  stadium_name: "Staples Center",
  location: [33.8030, -118.2673],
  icons: LakersIcon,
  url: "https://stats.nba.com/team/1610612747/franchise-leaders/",
  gp_lead:games[11].slice(1,-1),
  pt_lead: points[11],
  ast_lead: assists[11],
  reb_lead: rebounds[11],
  stl_lead:steals[11],
  blk_lead:blocks[11],
  stadium_image: "static/photos/LosAngelesLakersStadium.png"
 },
 {
  team_name: teams[12],
  stadium_name: "Fedex Forum",
  location: [35.1382, -90.0505],
  icons: GrizzliesIcon,
  url: "https://stats.nba.com/team/1610612763/franchise-leaders/",
  gp_lead:games[12],
  pt_lead: points[12],
  ast_lead: assists[12],
  reb_lead: rebounds[12],
  stl_lead:steals[12],
  blk_lead:blocks[12],
  stadium_image: "static/photos/MemphisGrizzliesStadium.png"
 },
 {
  team_name: teams[13],
  stadium_name: "American Airlines Arena",
  location: [25.7814, -80.1870],
  icons: HeatIcon,
  url: "https://stats.nba.com/team/1610612748/franchise-leaders/",
  gp_lead:games[13],
  pt_lead: points[13],
  ast_lead: assists[13],
  reb_lead: rebounds[13],
  stl_lead:steals[13],
  blk_lead:blocks[13],
  stadium_image: "static/photos/MiamiHeatStadium.png"
 },
 {
  team_name: teams[14],
  stadium_name: "Fiserv Forum",
  location: [43.2421, -87.5554],
  icons: BucksIcon,
  url: "https://stats.nba.com/team/1610612749/franchise-leaders/",
  gp_lead:games[14],
  pt_lead: points[14],
  ast_lead: assists[14],
  reb_lead: rebounds[14],
  stl_lead:steals[14],
  blk_lead:blocks[14],
  stadium_image: "static/photos/MilwaukeeBucksStadium.png"
 },
 {
  team_name: teams[15],
  stadium_name: "Target Center",
  location: [44.9795, -93.2760],
  icons: TimberwolvesIcon,
  url: "https://stats.nba.com/team/1610612750/franchise-leaders/",
  gp_lead:games[15],
  pt_lead: points[15],
  ast_lead: assists[15],
  reb_lead: rebounds[15],
  stl_lead:steals[15],
  blk_lead:blocks[15],
  stadium_image: "static/photos/MinnesotaTimberwolvesStadium.png"
 },
 {
  team_name: teams[16],
  stadium_name: "Smoothie King Center",
  location: [29.9490, -90.0821],
  icons: PelicansIcon,
  url: "https://stats.nba.com/team/1610612740/franchise-leaders/",
  gp_lead:games[16],
  pt_lead: points[16],
  ast_lead: assists[16],
  reb_lead: rebounds[16],
  stl_lead:steals[16],
  blk_lead:blocks[16],
  stadium_image: "static/photos/NewOrleansPelicansStadium.png"
 },
  {
  team_name: teams[17],
  stadium_name: "Madison Square Garden",
  location: [41.5005, -73.9934],
  icons: KnicksIcon,
  url: "https://stats.nba.com/team/1610612752/franchise-leaders/",
  gp_lead:games[17].slice(1,-1),
  pt_lead: points[17],
  ast_lead: assists[17],
  reb_lead: rebounds[17],
  stl_lead:steals[17],
  blk_lead:blocks[17],
  stadium_image: "static/photos/NewYorkKnicksStadium.png"
 },
 {
  team_name: teams[18],
  stadium_name: "Chesapeake Energy Arena",
  location: [35.4634, -97.5151],
  icons: ThunderIcon,
  url:"https://stats.nba.com/team/1610612760/franchise-leaders/",
  gp_lead:games[18],
  pt_lead: points[18],
  ast_lead: assists[18],
  reb_lead: rebounds[18],
  stl_lead:steals[18],
  blk_lead:blocks[18],
  stadium_image: "static/photos/OklahomaCityThunderStadium.png"
 },
 {
  team_name: teams[19],
  stadium_name: "Amway Center",
  location: [28.539167, -81.383611],
  icons: MagicIcon,
  url:"https://stats.nba.com/team/1610612753/franchise-leaders/",
  gp_lead:games[19],
  pt_lead: points[19],
  ast_lead: assists[19],
  reb_lead: rebounds[19],
  stl_lead:steals[19],
  blk_lead:blocks[19],
  stadium_image: "static/photos/OrlandoMagicStadium.png"
 },
 {
  team_name: teams[20],
  stadium_name: "Wells Fargo Center",
  location: [39.901111, -75.171944],
  icons: SixersIcon,
  url:"https://stats.nba.com/team/1610612755/franchise-leaders/",
  gp_lead:games[20].slice(1,-1),
  pt_lead: points[20],
  ast_lead: assists[20],
  reb_lead: rebounds[20],
  stl_lead:steals[20],
  blk_lead:blocks[20],
  stadium_image: "static/photos/Philadelphia76ersStadium.png"
 },
 {
  team_name: teams[21],
  stadium_name: "Talking Stick Arena",
  location: [33.445833, -112.071389],
  icons: SunsIcon,
  url:"https://stats.nba.com/team/1610612756/franchise-leaders/",
  gp_lead:games[21],
  pt_lead: points[21],
  ast_lead: assists[21],
  reb_lead: rebounds[21],
  stl_lead:steals[21],
  blk_lead:blocks[21],
  stadium_image: "static/photos/PhoenixSunsStadium.png"
 },
 {
  team_name: teams[22],
  stadium_name: "Moda Center",
  location: [45.031667, -122.666667],
  icons: TrailblazersIcon,
  url:"https://stats.nba.com/team/1610612757/franchise-leaders/",
  gp_lead:games[22],
  pt_lead: points[22],
  ast_lead: assists[22],
  reb_lead: rebounds[22],
  stl_lead:steals[22],
  blk_lead:blocks[22],
  stadium_image: "static/photos/PortlandTrailBlazersStadium.png"
 },
 {
  team_name: teams[23],
  stadium_name: "Golden 1 Center",
  location: [38.580361, -121.099611],
  icons: KingsIcon,
  url:"https://stats.nba.com/team/1610612758/franchise-leaders/",
  gp_lead:games[23],
  pt_lead: points[23],
  ast_lead: assists[23],
  reb_lead: rebounds[23],
  stl_lead:steals[23],
  blk_lead:blocks[23],
  stadium_image: "static/photos/SacramentoKingsStadium.png"
 },
 {
  team_name: teams[24],
  stadium_name: "AT&T Center",
  location: [29.426944, -98.4375],
  icons: SpursIcon,
  url:"https://stats.nba.com/team/1610612759/franchise-leaders/",
  gp_lead:games[24].slice(1,-1),
  pt_lead: points[24],
  ast_lead: assists[22],
  reb_lead: rebounds[24],
  stl_lead:steals[24],
  blk_lead:blocks[24],
  stadium_image: "static/photos/SanAntonioSpursStadium.png"
 },
 {
  team_name: teams[25],
  stadium_name: "Scotiabank Arena",
  location: [43.643333, -79.379167],
  icons: RaptorsIcon,
  url:"https://stats.nba.com/team/1610612761/franchise-leaders/",
  gp_lead:games[25],
  pt_lead: points[25],
  ast_lead: assists[24],
  reb_lead: rebounds[25],
  stl_lead:steals[25],
  blk_lead:blocks[25],
  stadium_image: "static/photos/TorontoRaptorsStadium.png"
 },
 {
  team_name: teams[26],
  stadium_name: "Vivint Smart Home Arena",
  location: [40.768333, -111.901111],
  icons: JazzIcon,
  url:"https://stats.nba.com/team/1610612762/franchise-leaders/",
  gp_lead:games[26].slice(1,-1),
  pt_lead: points[26],
  ast_lead: assists[25],
  reb_lead: rebounds[26],
  stl_lead:steals[26],
  blk_lead:blocks[26],
  stadium_image: "static/photos/UtahJazzStadium.png"
 },
 {
  team_name: teams[27],
  stadium_name: "Capital One Arena",
  location: [37.898056, -77.020833],
  icons: WizardsIcon,
  url:"https://stats.nba.com/team/1610612764/franchise-leaders/",
  gp_lead:games[27],
  pt_lead: points[27],
  ast_lead: assists[26],
  reb_lead: rebounds[27],
  stl_lead:steals[27],
  blk_lead:blocks[27],
  stadium_image: "static/photos/WashingtonWizardsStadium.png"
 }
];

url_list = []
//console.log(url_list)

 for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  url_list.push(city.url)
}



 // Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
 for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location, 
  {icon: city.icons}
  )
    .bindPopup("<h1>"+city.team_name+"</h1> <h3> "+ city.stadium_name + "<hr><br> All Time Stat Leaders (Per Game) <hr> Games Played: " +city.gp_lead+ "<br> Points: " +city.pt_lead+ "<br> Assists: " +city.ast_lead+ "<br> Rebounds: "+city.reb_lead+" <br> Steals: "+city.stl_lead+" <br> Blocks: "+city.blk_lead+" </h3> <hr>  <a href =" + city.url +"> View All Time Stats </a> <hr> <img src = '" + city.stadium_image +"'width=175px, height=100px>")
    .addTo(myMap);
 }
