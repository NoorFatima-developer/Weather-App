const apikey = "88c22151468d8609cbdce07b808891ff";
const search = document.querySelector(".search");
const input = document.querySelector("#city-name");
const searchbtn = document.querySelector(".btn");
const weatherdata = document.querySelector(".weather");
const icon = document.querySelector(".weather-icon");

search.addEventListener("click", function (e) {
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
    if (!response.ok) {
      throw new Error("Network response is not ok!");
    }
    const data = await response.json();
    console.log(data);
    weatherdata.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector("wind").innerHTML = data.wind.speed + " km/h";

    
    if(data.weather[0].main === "Clouds"){
        icon.src = "./images/clouds.png"
    }
    
    else if(data.weather[0].main === "Clear"){
        icon.src = "images/clear.png"
    }
    else if(data.weather[0].main === "Rain"){
        icon.src = "images/rain.png"
        
    }
    else if(data.weather[0].main === "Drizzle"){
        icon.src = "images/mist.png"
    }
    else if(data.weather[0].main === "Mist"){
        icon.src = "images/mist.png"
    }

  } catch (err) {}
}
