const Inpt = document.getElementById("Inpt");

const City = document.getElementById("City");
const Temp = document.getElementById("Temp");
const Description = document.getElementById("Description");
const Humidity = document.getElementById("Humidity");
const Feels = document.getElementById("Feels");
const Wind = document.getElementById("Wind");
const Pressure = document.getElementById("Pressure");
const Icon = document.getElementById("Icon");

const API_KEY = "2848b7c3df1dccb7ca6315b16118b3b6";

async function fetchWeather(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!res.ok) throw new Error("City not found");

    const data = await res.json();
    display(data);
  } catch (err) {
    City.innerText = "Invalid city";
    Temp.innerText = "--";
    Description.innerText = "--";
  }
}

function Search() {
  const city = Inpt.value.trim();
  if (city) fetchWeather(city);
}

function display(data) {
  City.innerText = `${data.name}, ${data.sys.country}`;
  Temp.innerText = `${Math.round(data.main.temp)}°`;
  Feels.innerText = `${Math.round(data.main.feels_like)}°`;
  Description.innerText = data.weather[0].description;
  Humidity.innerText = `${data.main.humidity} %`;
  Wind.innerText = `${Math.round(data.wind.speed * 3.6)} km/h`;
  Pressure.innerText = `${data.main.pressure} hPa`;

  Icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

fetchWeather("Indore");
