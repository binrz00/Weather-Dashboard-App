//set up weather api url
/*const city = "forest lake"//user input
const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=imperial&appid=82e0e6ab873a6ac39caada2c8b0fafd5"
// axios get weather
axios.get(url).then(function(response){
    console.log(response);
//json parse the data requested
//display under current weather conditions (maybe need moment)
//* City
const town = response.data.name;
console.log("town:" +town);
//* Date
let myDate = new Date(response.data.dt*1000);
console.log("date: "+myDate);
//* Icon image (visual representation of weather conditions)
const icon = response.data.weather.icon;
console.log("icon:"+icon);
//* Temperature
const temp = response.data.main.temp;
console.log("temp:"+temp);
//* Humidity
const humidity = response.data.main.humidity;
console.log("humidity:"+humidity);
//* Wind speed
const windSpeed = response.data.wind.speed;
console.log("wind:"+windSpeed);
//* UV index
const lat = response.data.coord.lat;
const lon = response.data.coord.lon;
const uvIndexurl = "https://api.openweathermap.org/data/2.5/uvi?appid=82e0e6ab873a6ac39caada2c8b0fafd5&lat="+lat+"&lon="+lon;
axios.get(uvIndexurl).then(function(responseUv){
    const uvIndex = responseUv;
    //console.log(uvIndex);
    console.log("uv index:"+responseUv.data.value);
})
//search history with city name (local storage)
// clicking on the city name gets current and future data 
//5 day forcast under current weather with:
//* Date
//* Icon image (visual representation of weather conditions)
//* Temperature
  //Humidity
})*/