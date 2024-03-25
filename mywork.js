const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="//&appid=
const apikey ="8ad606d10db0c97cea620a4f966997b1"
// https://api.openweathermap.org/data/2.5/weather?q=sargodha&appid=8ad606d10db0c97cea620a4f966997b1&units=metric

const mainimg =document.querySelector("#weather_img");
const maindest =document.querySelector("#weather_desc");
const city =document.querySelector("#city_name")
const temp =document.querySelector("#weather_temp")
const humidity =document.querySelector("#humidity")
const windg =document.querySelector("#wind_speed")
const input =document.querySelector("#input")
const button =document.querySelector("#btn")



async function checkweather(cityN) {
    const response = await fetch(apiurl+cityN + "&appid=" + apikey)

    var data = await response.json();
    console.log(data)

    maindest.innerHTML =data.weather[0].description;
    city.innerHTML =data.name
    temp.innerHTML = data.main.temp+" °C"
    humidity.innerHTML =data.main.humidity
    windg.innerHTML =data.wind.speed

    if (data.weather[0].main =="Clear") {
        mainimg.src ="images/clear.png" 

    } else if (data.weather[0].main =="Clouds") {
        mainimg.src ="images/clouds.jpg"
    } else if (data.weather[0].main=="Rain") {
        mainimg.src = "images/rain.jpg"
    }
    else if (data.weather[0].main=="Drizzle") {
        mainimg.src = "images/drizzle.jpg"
    }
    else if (data.weather[0].main=="Mist") {
        weatherIcon.src = "images/mist.jpg"
    }
}


button.addEventListener("click" ,()=>{checkweather(input.value)})
