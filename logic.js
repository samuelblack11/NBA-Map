// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
 });
 
 var HawksIcon = L.icon({
    iconUrl : "Images/AtlantaHawks.png",
    iconSize:     [38, 95], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var CelticsIcon = L.icon({
    iconUrl : "Images/BostonCeltics.png",
    iconSize:     [38, 95], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var BrooklynNetsIcon = L.icon({
    iconUrl : "Images/BrooklynNets.png",
    iconSize:     [38, 95], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var HornetsIcon = L.icon({
    iconUrl : "Images/CharlotteHornets.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var BullsIcon = L.icon({
    iconUrl : "Images/ChicagoBulls.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
  var CavaliersIcon = L.icon({
    iconUrl : "Images/ClevelandCavaliers.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
   var MavericksIcon = L.icon({
    iconUrl : "Images/DallasMavericks.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
    var NuggetsIcon = L.icon({
    iconUrl : "Images/DenverNuggets.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var PistonsIcon = L.icon({
    iconUrl : "Images/DetroitPistons.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
  var WarriorsIcon = L.icon({
    iconUrl : "Images/GoldenStateWarriors.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var RocketsIcon = L.icon({
    iconUrl : "Images/HoustonRockets.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var PacersIcon = L.icon({
    iconUrl : "Images/IndianaPacers.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var ClippersIcon = L.icon({
    iconUrl : "Images/LosAngelesClippers.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var LakersIcon = L.icon({
    iconUrl : "Images/LosAngelesLakers.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var GrizzliesIcon = L.icon({
    iconUrl : "Images/MemphisGrizzlies.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var HeatIcon = L.icon({
    iconUrl : "Images/MiamiHeat.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var BucksIcon = L.icon({
    iconUrl : "Images/MilwaukeeBucks.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var TimberwolvesIcon = L.icon({
    iconUrl : "Images/MinnesotaTimberwolves.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var PelicansIcon = L.icon({
    iconUrl : "Images/NewOrleansPelicans.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var KnicksIcon = L.icon({
    iconUrl : "Images/NewYorkKnicks.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
  var ThunderIcon = L.icon({
    iconUrl : "Images/OklahomaCityThunder.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var MagicIcon = L.icon({
    iconUrl : "Images/OrlandoMagic.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var SixersIcon = L.icon({
    iconUrl : "Images/Philadelphia76ers.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var SunsIcon = L.icon({
    iconUrl : "Images/PhoenixSuns.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var TrailblazersIcon = L.icon({
    iconUrl : "Images/PortlandTrailBlazers.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var KingsIcon = L.icon({
    iconUrl : "Images/SacramentoKings.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var SpursIcon = L.icon({
    iconUrl : "Images/SanAntonioSpurs.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var RaptorsIcon = L.icon({
    iconUrl : "Images/TorontoRaptors.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
  var JazzIcon = L.icon({
    iconUrl : "Images/UtahJazz.png",
    iconSize:     [38, 95], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 });
 var WizardsIcon = L.icon({
    iconUrl : "Images/WashingtonWizards.png",
    iconSize:     [38, 95], // size of the icon
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
  team_name: "Atlanta Hawks",
  stadium_name: "State Farm Arena",
  location: [33.7573, -84.3963],
  icons: HawksIcon,
  url: "https://stats.nba.com/team/1610612737/franchise-leaders/"
 },
 {
  team_name: "Boston Celtics",
  stadium_name: "TD Garden",
  location: [42.3662, -71.0621],
  icons: CelticsIcon,
  url: "https://stats.nba.com/team/1610612738/franchise-leaders/"
 },
 {
  team_name: "Brooklyn Nets",
  stadium_name: "Barclays Center",
  location: [40.6826, -73.9754],
  icons: NetsIcon,
  url: "https://stats.nba.com/team/1610612751/franchise-leaders/"
 },
 {
  team_name: "Charlotte Hornets",
  stadium_name: "Spectrum Center",
  location: [35.2251, -80.8392],
  icons: HornetsIcon,
  url: "https://stats.nba.com/team/1610612766/franchise-leaders/"
 },
 {
  team_name: "Chicago Bulls",
  stadium_name: "United Center",
  location: [41.8807, -87.6742],
  icons: BullsIcon,
  url: "https://stats.nba.com/team/1610612741/franchise-leaders/"
 },
 {
  team_name: "Cleveland Cavaliers",
  stadium_name: "Quicken Loans Arena",
  location: [41.4965, -81.6882],
  icons: CavaliersIcon,
  url: "https://stats.nba.com/team/1610612739/franchise-leaders/"
 },
 {
  team_name: "Dallas Mavericks",
  stadium_name: "American Airlines Center",
  location: [32.7905, -96.8104],
  icons: MavericksIcon,
  url: "https://stats.nba.com/team/1610612742/franchise-leaders/"
 },
 {
  team_name: "Denver Nuggets",
  stadium_name: "Pepsi Center",
  location: [39.7487, -105.0077],
  icons: NuggetsIcon,
  url: "https://stats.nba.com/team/1610612743/franchise-leaders/"
 },
 {
  team_name: "Detroit Pistons",
  stadium_name: "Little Caesars Arena",
  location: [42.3410, -83.0550],
  icons: PistonsIcon,
  url: "https://stats.nba.com/team/1610612765/franchise-leaders/"
 },
 {
  team_name: "Golden State Warriors",
  stadium_name: "Oracle Arena",
  location: [37.7503, -122.2030],
  icons: WarriorsIcon,
  url: "https://stats.nba.com/team/1610612744/franchise-leaders/"
 },
 {
  team_name: "Houston Rockets",
  stadium_name: "Toyota Center",
  location: [29.7508, -95.3621],
  icons: RocketsIcon,
  url: "https://stats.nba.com/team/1610612745/franchise-leaders/"
 },
 {
  team_name: "Indiana Pacers",
  stadium_name: "Bankers Life Fieldhouse",
  location: [39.7640, -86.1555],
  icons: PacersIcon,
  url: "https://stats.nba.com/team/1610612754/franchise-leaders/"
 },
 {
  team_name: "Los Angeles Clippers",
  stadium_name: "Staples Center",
  location: [34.0430, -118.2673],
  icons: ClippersIcon,
  url: "https://stats.nba.com/team/1610612746/franchise-leaders/"
 },
 {
  team_name: "Los Angeles Lakers",
  stadium_name: "Staples Center",
  location: [34.0430, -118.2673],
  icons: LakersIcon,
  url: "https://stats.nba.com/team/1610612747/franchise-leaders/"
 },
 {
  team_name: "Memphis Grizzlies",
  stadium_name: "Fedex Forum",
  location: [35.1382, -90.0505],
  icons: GrizzliesIcon,
  url: "https://stats.nba.com/team/1610612763/franchise-leaders/"
 },
 {
  team_name: "Miami Heat",
  stadium_name: "American Airlines Arena",
  location: [25.7814, -80.1870],
  icons: HeatIcon,
  url: "https://stats.nba.com/team/1610612748/franchise-leaders/"
 },
 {
  team_name: "Milwaukee Bucks",
  stadium_name: "Fiserv Forum",
  location: [43.2421, -87.5554],
  icons: BucksIcon,
  url: "https://stats.nba.com/team/1610612749/franchise-leaders/"
 },
 {
  team_name: "Minnesota Timberwolves",
  stadium_name: "Target Center",
  location: [44.9795, -93.2760],
  icons: TimberwolvesIcon,
  url: "https://stats.nba.com/team/1610612750/franchise-leaders/"
 },
 {
  team_name: "New Orleans Pelicans",
  stadium_name: "Smoothie King Center",
  location: [29.9490, -90.0821],
  icons: PelicansIcon,
  url: "https://stats.nba.com/team/1610612740/franchise-leaders/"
 },
 {
  team_name: "New York Knicks",
  stadium_name: "Madison Square Garden",
  location: [40.7505, -73.9934],
  icons: KnicksIcon,
  url: "https://stats.nba.com/team/1610612752/franchise-leaders/"
 },
 {
  team_name: "Oklahoma City Thunder",
  stadium_name: "Amway Center",
  location: [35.4634, -97.5151],
  icons: ThunderIcon,
  url:"https://stats.nba.com/team/1610612760/franchise-leaders/"
 },
 {
  team_name: "Orlando Magic",
  stadium_name: "Amway Center",
  location: [28.539167, -81.383611],
  icons: MagicIcon,
  url:"https://stats.nba.com/team/1610612753/franchise-leaders/"
 },
 {
  team_name: "Philadelphia 76ers",
  stadium_name: "Wells Fargo Center",
  location: [39.901111, -75.171944],
  icons: SixersIcon,
  url:"https://stats.nba.com/team/1610612755/franchise-leaders/"
 },
 {
  team_name: "Phoenix Suns",
  stadium_name: "Talking Stick Arena",
  location: [33.445833, -112.071389],
  icons: SunsIcon,
  url:"https://stats.nba.com/team/1610612756/franchise-leaders/"
 },
 {
  team_name: "Portland Trail Blazers",
  stadium_name: "Moda Center",
  location: [45.531667, -122.666667],
  icons: TrailblazersIcon,
  url:"https://stats.nba.com/team/1610612757/franchise-leaders/"
 },
 {
  team_name: "Sacramento Kings",
  stadium_name: "Golden 1 Center",
  location: [38.580361, -121.499611],
  icons: KingsIcon,
  url:"https://stats.nba.com/team/1610612758/franchise-leaders/"
 },
 {
  team_name: "San Antonio Spurs",
  stadium_name: "AT&T Center",
  location: [29.426944, -98.4375],
  icons: SpursIcon,
  url:"https://stats.nba.com/team/1610612759/franchise-leaders/"
 },
 {
  team_name: "Toronto Raptors",
  stadium_name: "Scotiabank Arena",
  location: [43.643333, -79.379167],
  icons: RaptorsIcon,
  url:"https://stats.nba.com/team/1610612761/franchise-leaders/"
 },
 {
  team_name: "Utah Jazz",
  stadium_name: "Vivint Smart Home Arena",
  location: [40.768333, -111.901111],
  icons: JazzIcon,
  url:"https://stats.nba.com/team/1610612762/franchise-leaders/"
 },
 {
  team_name: "Washington Wizards",
  stadium_name: "Capital One Arena",
  location: [38.898056, -77.020833],
  icons: WizardsIcon,
  url:"https://stats.nba.com/team/1610612764/franchise-leaders/"
 }
];
 
 // Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
 for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location, 
  {icon: city.icons}
  )
    .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Population " + city.population + "</h3>")
    .addTo(myMap);
 }