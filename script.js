const apikey = "88c22151468d8609cbdce07b808891ff"
const search = document.querySelector('.search')
const input = document.querySelector('#city-name')
const searchbtn = document.querySelector('.btn');
const weatherdata = document.querySelector('.weather')
const icon = document.createElement('weather-icon');

searchbtn.addEventListener('submit',function(e) {
    e.preventDefault();
    // console.log(input.value);   
    const cityname = input.value;
    getWeatherData(cityname)
});

async function getWeatherData() {
    const response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`)
}