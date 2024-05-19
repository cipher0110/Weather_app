const tempEl = document.querySelector(".temp");

const cityEl = document.querySelector(".city");

const humidityEl = document.querySelector(".humidity");

const windEL = document.querySelector(".wind");

const searchBox = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

const ApiKey = "e12d843bc5784f93034b12d10a262146";

const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

async function checkWeather(city) {
  const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();
    console.log(data);
    tempEl.innerHTML = Math.round(data.main.temp) + "°C";
    cityEl.innerHTML = data.name;
    humidityEl.innerHTML = data.main.humidity + "%";
    windEL.innerHTML = data.wind.speed + "Km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/cloudy.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/sun.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Fog") {
      weatherIcon.src = "images/fog.png";
    } else if (data.weather[0].main == "Hurricane") {
      weatherIcon.src = "images/hurricane.png";
    } else if (data.weather[0].main == "Tornado") {
      weatherIcon.src = "images/tornado.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
