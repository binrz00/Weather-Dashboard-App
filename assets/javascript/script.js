let data = JSON.parse(localStorage.getItem("key"));
if (data.length > 0) {
  weather(data[0]);
}
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
        for (let i = 0; i < responseFive.data.list.length; i++) {
          const date = new Date(responseFive.data.list[i * 8 + 2].dt * 1000).toLocaleDateString().split(",")[0];
          document.getElementById("date" + i).innerHTML = date;
          const icon = responseFive.data.list[i * 8 + 2].weather[0].icon;
          document.getElementById("icon" + i).setAttribute("src", "http://openweathermap.org/img/wn/" + icon + ".png");
          const temp = responseFive.data.list[i * 8 + 2].main.temp;
          document.getElementById("temp" + i).innerHTML = "Temp: " + temp + "℉";
          const humidity = responseFive.data.list[i * 8 + 2].main.humidity;
          document.getElementById("humid" + i).innerHTML = "Humidity: " + humidity + "%";
        }
      })
    })
  })
}
function createButton(city) {
  let prevData = localStorage.getItem("key") || "[]";
  let data = JSON.parse(prevData);
  data.unshift(city);
  if (data.length > 5) {
    data.pop();
  }
  localStorage.setItem("key", JSON.stringify(data));
  const buttons = document.querySelectorAll(".cities");
  buttons.forEach(function (town) {
    town.classList.add("d-none");
  })
  data.forEach(town => {
    let button = document.createElement("div");
    button.classList.add("cities");
    button.classList.add("rounded-sm");
    console.log(button);
    button.innerText = town;
    button.addEventListener("click", function () {
      let city = button.innerHTML;
      weather(city);
      document.getElementById("search").value = "";
    })
    document.getElementById("cities").append(button)
  });
}