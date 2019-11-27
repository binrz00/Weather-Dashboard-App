
document.getElementById("citySearch").addEventListener("click", function () {
  let city = document.getElementById("search").value;

  createButton(city);
  weather(city);
  document.getElementById("search").value = "";
})
function weather(city) {
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=82e0e6ab873a6ac39caada2c8b0fafd5"
  axios.get(url).then(function (response) {

    const icon = response.data.weather[0].icon;
    document.getElementById("icon").setAttribute("src", "http://openweathermap.org/img/wn/" + icon + ".png")
    const theDate = new Date(response.data.dt * 1000).toLocaleDateString().split(",")[0];
    const town = response.data.name;
    document.getElementById("city").innerHTML = town + " (" + theDate + ")";

    const temp = response.data.main.temp;
    document.getElementById("temp").innerHTML = "Temperature: " + temp + "℉";
    const humidity = response.data.main.humidity;
    document.getElementById("humidity").innerHTML = "humidity: " + humidity + "%";
    const windSpeed = response.data.wind.speed;
    document.getElementById("wind").innerHTML = "Wind Speed: " + windSpeed + "MPH";
    const lat = response.data.coord.lat;
    const lon = response.data.coord.lon;
    const uvIndexurl = "https://api.openweathermap.org/data/2.5/uvi?appid=82e0e6ab873a6ac39caada2c8b0fafd5&lat=" + lat + "&lon=" + lon;
    axios.get(uvIndexurl).then(function (responseUv) {
      document.getElementById("uv").innerHTML = "UV index: " + responseUv.data.value;
      const fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?appid=82e0e6ab873a6ac39caada2c8b0fafd5&lat=" + lat + "&lon=" + lon + "&units=imperial&";
      axios.get(fiveDayUrl).then(function (responseFive) {

        const date1 = new Date(responseFive.data.list[2].dt * 1000).toLocaleDateString().split(",")[0];
        document.getElementById("date1").innerHTML = date1
        const icon1 = responseFive.data.list[2].weather[0].icon;
        document.getElementById("icon1").setAttribute("src", "http://openweathermap.org/img/wn/" + icon1 + ".png");
        const temp1 = responseFive.data.list[2].main.temp;
        document.getElementById("temp1").innerHTML = "Temp: " + temp1 + "℉";
        const humidity1 = responseFive.data.list[2].main.humidity;
        document.getElementById("humid1").innerHTML = "Humidity: " + humidity1 + "%";

        const date2 = new Date(responseFive.data.list[10].dt * 1000).toLocaleDateString().split(",")[0];
        document.getElementById("date2").innerHTML = date2
        const icon2 = responseFive.data.list[10].weather[0].icon;
        document.getElementById("icon2").setAttribute("src", "http://openweathermap.org/img/wn/" + icon2 + ".png");
        const temp2 = responseFive.data.list[10].main.temp;
        document.getElementById("temp2").innerHTML = "Temp: " + temp2 + "℉";
        const humidity2 = responseFive.data.list[10].main.humidity;
        document.getElementById("humid2").innerHTML = "Humidity: " + humidity2 + "%";

        const date3 = new Date(responseFive.data.list[18].dt * 1000).toLocaleDateString().split(",")[0];
        document.getElementById("date3").innerHTML = date3
        const icon3 = responseFive.data.list[18].weather[0].icon;
        document.getElementById("icon3").setAttribute("src", "http://openweathermap.org/img/wn/" + icon3 + ".png");
        const temp3 = responseFive.data.list[18].main.temp;
        document.getElementById("temp3").innerHTML = "Temp: " + temp3 + "℉";
        const humidity3 = responseFive.data.list[18].main.humidity;
        document.getElementById("humid3").innerHTML = "Humidity: " + humidity3 + "%";

        const date4 = new Date(responseFive.data.list[26].dt * 1000).toLocaleDateString().split(",")[0];
        document.getElementById("date4").innerHTML = date4
        const icon4 = responseFive.data.list[26].weather[0].icon;
        document.getElementById("icon4").setAttribute("src", "http://openweathermap.org/img/wn/" + icon4 + ".png");
        const temp4 = responseFive.data.list[26].main.temp;
        document.getElementById("temp4").innerHTML = "Temp: " + temp4 + "℉";
        const humidity4 = responseFive.data.list[26].main.humidity;
        document.getElementById("humid4").innerHTML = "Humidity: " + humidity4 + "%";

        const date5 = new Date(responseFive.data.list[34].dt * 1000).toLocaleDateString().split(",")[0];
        document.getElementById("date5").innerHTML = date5
        const icon5 = responseFive.data.list[34].weather[0].icon;
        document.getElementById("icon5").setAttribute("src", "http://openweathermap.org/img/wn/" + icon5 + ".png");
        const temp5 = responseFive.data.list[34].main.temp;
        document.getElementById("temp5").innerHTML = "Temp: " + temp5 + "℉";
        const humidity5 = responseFive.data.list[34].main.humidity;
        document.getElementById("humid5").innerHTML = "Humidity: " + humidity5 + "%";


      })
    })
  })
}
function createButton(city) {
  const button = document.createElement("div");
  button.classList.add("cities");
  button.classList.add("rounded-sm");
  button.innerHTML = city;
  button.addEventListener("click", function () {
    let city = button.innerHTML;
    weather(city);
    document.getElementById("search").value = "";
  })
  document.getElementById("cities").append(button);

  let prevData = localStorage.getItem("key") || "[]";
  let data = JSON.parse(prevData);
  data.push(city);
  // if(city.length>0){
  //  const buttons = document.querySelectorAll(".cities");
  //  console.log(buttons);
  // buttons.classList.add("d-none");
  //}
  // data.forEach(town => {


  //   let button = document.createElement("div");
  //   button.classList.add("cities");
  //   button.classList.add("rounded-sm");
  //   button.innerText = town;
  //   button.addEventListener("click", function () {
  //     let city = button.innerHTML;
  //     weather(city);
  //     document.getElementById("search").value = "";
  //   })
  //   document.getElementById("cities").append(button)
  // });

  localStorage.setItem("key", JSON.stringify(data));
}



