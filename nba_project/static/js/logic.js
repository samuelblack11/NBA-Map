

// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  minZoom: 4.5,
  maxZoom: 6,
  zoom: 4.5
 });



L.easyButton( '<span class="star">&starf;</span>', function(){
window.location.href = "/scrape"}, 'Scrape Data from stats.NBA.com').addTo(myMap);

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
    iconSize:     [52, 65], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var NetsIcon = L.icon({
    iconUrl : "static/photos/BrooklynNets.png",
    iconSize:     [47, 65], // size of the icon
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
    iconSize:     [57, 95], // size of the icon
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
 }).addTo(myMap);
 
 // An array containing each city's name, location, and attendance data
 var cities = [{
  team_name: teams[0],
  stadium_name: "State Farm Arena",
  location: [33.0573, -84.3963],
  icons: HawksIcon,
  attendance [0],
  areana capacity [0],
  % capacity [0],
  stadium_image: "static/photos/AtlantaHawksStadium.png"
 },
 {
  team_name: teams[1],
  stadium_name: "TD Garden",
  location: [41.8662, -71.0621],
  icons: CelticsIcon,
  attendance [1],
  areana capacity [1],
  % capacity [1],
  stadium_image: "static/photos/BostonCelticsStadium.png"
 },
 {
  team_name: teams[2],
  stadium_name: "Barclays Center",
  location: [40.6826, -72.9754],
  icons: NetsIcon,
  attendance [2],
  areana capacity [2],
  % capacity [2],
  stadium_image: "static/photos/BrooklynNetsStadium.png"
 },
 {
  team_name: teams[3],
  stadium_name: "Spectrum Center",
  location: [35.2251, -80.8392],
  icons: HornetsIcon,
  attendance [3],
  areana capacity [3],
  % capacity [3],
  stadium_image: "static/photos/CharlotteHornetsStadium.png"
 },
 {
  team_name: teams[4],
  stadium_name: "United Center",
  location: [41.8807, -87.6742],
  icons: BullsIcon,
  attendance [4],
  areana capacity [4],
  % capacity [4],
  stadium_image: "static/photos/ChicagoBullsStadium.png"
 },
 {
  team_name: teams[5],
  team_name: "Cleveland Cavaliers",
  stadium_name: "Quicken Loans Arena",
  location: [40.4965, -81.6882],
  icons: CavaliersIcon,
  attendance [5],
  areana capacity [5],
  % capacity [5],
  stadium_image: "static/photos/ClevelandCavaliersStadium.png"
 },
 {
  team_name: teams[6],
  stadium_name: "American Airlines Center",
  location: [32.3905, -96.8104],
  icons: MavericksIcon,
  attendance [6],
  areana capacity [6],
  % capacity [6],
  stadium_image: "static/photos/DallasMavericksStadium.png"
 },
 {
  team_name: teams[7],
  stadium_name: "Pepsi Center",
  location: [39.2487, -105.0077],
  icons: NuggetsIcon,
  attendance [7],
  areana capacity [7],
  % capacity [7],
  stadium_image: "static/photos/DenverNuggetsStadium.png"
 },
 {
  team_name: teams[8],
  stadium_name: "Little Caesars Arena",
  location: [42.3410, -83.0550],
  icons: PistonsIcon,
  attendance [8],
  areana capacity [8],
  % capacity [8],
  stadium_image: "static/photos/DetroitPistonsStadium.png"
 },
 {
  team_name: teams[9],
  stadium_name: "Oracle Arena",
  location: [37.7503, -122.5030],
  icons: WarriorsIcon,
  attendance [9],
  areana capacity [9],
  % capacity [9],
  stadium_image: "static/photos/GoldenStateWarriorsStadium.png"
 },
 {
  team_name: teams[10],
  stadium_name: "Toyota Center",
  location: [28.7508, -95.3621],
  icons: RocketsIcon,
  attendance [10,
  areana capacity [10],
  % capacity [10],
  stadium_image: "static/photos/HoustonRocketsStadium.png"
 },
 {
  team_name: teams[11],
  stadium_name: "Bankers Life Fieldhouse",
  location: [39.7640, -86.1555],
  icons: PacersIcon,
  uattendance [11],
  areana capacity [11],
  % capacity [11],
  stadium_image: "static/photos/IndianaPacersStadium.png"
 },
 {
  team_name: teams[12],
  stadium_name: "Staples Center",
  location: [32.8430, -117.0673],
  icons: ClippersIcon,
  url: "https://stats.nba.com/team/1610612746/franchise-leaders/",
  attendance [12],
  areana capacity [12],
  % capacity [12],
  stadium_image: "static/photos/LosAngelesClippersStadium.png"
 },
 {
  team_name: teams[13],
  stadium_name: "Staples Center",
  location: [33.8030, -118.2673],
  icons: LakersIcon,
  attendance [13],
  areana capacity [13],
  % capacity [13],
  stadium_image: "static/photos/LosAngelesLakersStadium.png"
 },
 {
  team_name: teams[14],
  stadium_name: "Fedex Forum",
  location: [35.1382, -90.0505],
  icons: GrizzliesIcon,
  attendance [814,
  areana capacity [14],
  % capacity [14],
  stadium_image: "static/photos/MemphisGrizzliesStadium.png"
 },
 {
  team_name: teams[15],
  stadium_name: "American Airlines Arena",
  location: [25.7814, -80.1870],
  icons: HeatIcon,
  attendance [15],
  areana capacity [15],
  % capacity 15],
  stadium_image: "static/photos/MiamiHeatStadium.png"
 },
 {
  team_name: teams[16],
  stadium_name: "Fiserv Forum",
  location: [43.2421, -87.5554],
  icons: BucksIcon,
  uattendance [16],
  areana capacity [16],
  % capacity [16],
  stadium_image: "static/photos/MilwaukeeBucksStadium.png"
 },
 {
  team_name: teams[17],
  stadium_name: "Target Center",
  location: [44.9795, -93.2760],
  icons: TimberwolvesIcon,
  attendance [17],
  areana capacity [17],
  % capacity [17],
  stadium_image: "static/photos/MinnesotaTimberwolvesStadium.png"
 },
 {
  team_name: teams[18],
  stadium_name: "Smoothie King Center",
  location: [29.9490, -90.0821],
  icons: PelicansIcon,
  attendance [18],
  areana capacity [18],
  % capacity [18],
  stadium_image: "static/photos/NewOrleansPelicansStadium.png"
 },
  {
  team_name: teams[19],
  stadium_name: "Madison Square Garden",
  location: [41.5005, -73.9934],
  icons: KnicksIcon,
  attendance [19],
  areana capacity [19],
  % capacity [19],
  stadium_image: "static/photos/NewYorkKnicksStadium.png"
 },
 {
  team_name: teams[20],
  stadium_name: "Chesapeake Energy Arena",
  location: [35.4634, -97.5151],
  icons: ThunderIcon,
  attendance [20,
  areana capacity [20],
  % capacity [20],
  stadium_image: "static/photos/OklahomaCityThunderStadium.png"
 },
 {
  team_name: teams[21],
  stadium_name: "Amway Center",
  location: [28.539167, -81.383611],
  icons: MagicIcon,
  attendance [21],
  areana capacity [21],
  % capacity [21],,
  stadium_image: "static/photos/OrlandoMagicStadium.png"
 },
 {
  team_name: teams[22],
  stadium_name: "Wells Fargo Center",
  location: [39.901111, -75.171944],
  icons: SixersIcon,
  attendance [22],
  areana capacity [22],
  % capacity [22,
  stadium_image: "static/photos/Philadelphia76ersStadium.png"
 },
 {
  team_name: teams[23],
  stadium_name: "Talking Stick Arena",
  location: [33.045833, -112.071389],
  icons: SunsIcon,
  attendance [23],
  areana capacity [23],
  % capacity [23],
  stadium_image: "static/photos/PhoenixSunsStadium.png"
 },
 {
  team_name: teams[24],
  stadium_name: "Moda Center",
  location: [45.031667, -122.666667],
  icons: TrailblazersIcon,
  uattendance [24],
  areana capacity [24],
  % capacity [24],
  stadium_image: "static/photos/PortlandTrailBlazersStadium.png"
 },
 {
  team_name: teams[25],
  stadium_name: "Golden 1 Center",
  location: [38.580361, -121.099611],
  icons: KingsIcon,
  attendance [25],
  areana capacity [25],
  % capacity [25],
  stadium_image: "static/photos/SacramentoKingsStadium.png"
 },
 {
  team_name: teams[26],
  stadium_name: "AT&T Center",
  location: [28.826944, -98.4375],
  icons: SpursIcon,
  attendance [26],
  areana capacity [26],
  % capacity [26],
  stadium_image: "static/photos/SanAntonioSpursStadium.png"
 },
 {
  team_name: teams[27],
  stadium_name: "Scotiabank Arena",
  location: [43.643333, -79.379167],
  icons: RaptorsIcon,
  attendance [27,
  areana capacity [27],
  % capacity [27],
  stadium_image: "static/photos/TorontoRaptorsStadium.png"
 },
 {
  team_name: teams[28],
  stadium_name: "Vivint Smart Home Arena",
  location: [40.268333, -111.901111],
  icons: JazzIcon,
  url:"https://stats.nba.com/team/1610612762/franchise-leaders/",
  attendance [28],
  areana capacity [28],
  % capacity [28],
  stadium_image: "static/photos/UtahJazzStadium.png"
 },
 {
  team_name: teams[29],
  stadium_name: "Capital One Arena",
  location: [37.898056, -77.020833],
  icons: WizardsIcon,
  attendance [29],
  areana capacity [29],
  % capacity [29],
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
    .bindPopup("<h1>"+city.team_name+"</h1> <h3> "+ city.stadium_name + "<hr><br> "Stadium Attendance History  = '" + city.stadium_image +"'width=175px, height=100px>")
    .addTo(myMap);
 }
