async function getWeather(event) {
  event.preventDefault();
  
  
  const audio = document.getElementById("sparrow-chirping");
  if (audio) {
    audio.play().catch(error => console.log("Audio play blocked/failed:", error));
  }
  
  let city = document.querySelector("#city-input").value
  console.log(city)
  
  let response = await axios(`https://api.weatherapi.com/v1/current.json?key=25175e31b7074cfc895204529222906&q=${city}`)
  console.log("response:", response)
  let temperature = response.data.current.temp_c
  console.log("temperature:", response.data.current.temp_c)
  
  document.querySelector('#temp-result').innerHTML = `${temperature}°C`
  
  let humidity = response.data.current.humidity;
let windSpeed = response.data.current.wind_kph;
let icon = response.data.current.condition.icon;
let precipitation = response.data.current.chance_of_rain;

document.querySelector('#humidity-result').innerHTML = `${humidity}%`;
document.querySelector('#wind-result').innerHTML = `${windSpeed} kph`;
document.querySelector('#weather-icon').src = `https:${icon}`
document.querySelector('#weather-icon').style.display = 'inline-block';
document.querySelector('#precipitation-percentage').innerHTML = `${precipitation}%`
}






