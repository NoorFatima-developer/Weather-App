const apikey = "88c22151468d8609cbdce07b808891ff";
const search = document.querySelector(".search");
const input = document.querySelector("#city-name");
const searchbtn = document.querySelector(".btn");
const weatherdata = document.querySelector(".weather");
const weathericon = document.querySelector(".weather-icon");
// console.log(weathericon);

searchbtn.addEventListener("click", function (e) {
  e.preventDefault();
  //   console.log(input.value);
  const cityname = input.value;
  getWeatherData(cityname);
});

async function getWeatherData(cityname) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`
    );
    if (response.status === 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
      throw new Error(`City not found or API error: ${response.statusText}`);
    } else {
      const data = await response.json();
      // console.log(data);
      // console.log("Weather Condition:", data.weather[0].main);

      weatherdata.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =
        Math.floor(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
      

      if (data.weather[0].main == "Clouds") {
        weatherdata.src = "images/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        weathericon.src = "images/clear.png";
      } else if (data.weather[0].main == "Rain") {
        weathericon.src = "images/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "images/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weathericon.src = "images/mist.png";
      }

      
    }
  } catch (err) {
    // console.log(err);
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}
