const API_KEY = "6a7aab2885f2162aed5eb4390471198a";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather span:first-child");
      const city = document.querySelector(".weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    });
}
function onGeoFail() {
  console.log("EXCEPTION : cannot find geolocation information.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);
