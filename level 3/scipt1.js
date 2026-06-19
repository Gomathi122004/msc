async function getweather(){

  let city = document.getElementById("city").value;

  let apikey = "68b24ea5b06c824f1265cd08fc32e323";
  let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

  let response = await fetch(url);
  let data = await response.json();

  console.log(data);

  let temp = data.main.temp;
  let weather = data.weather[0].description;

  document.getElementById("result").innerHTML =
  `🌡️ temp: ${temp}°C <br> 🌤️ weather: ${weather}`;
}