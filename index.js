// create variables to store the relevant values
const apiKey = '08e9c08abbba47b6ca1684e475d17a6d';
const searchBtn = document.getElementById('search-btn');
const locationInput = document.getElementById('location');
const weatherInfo = document.getElementById('weather-info');

// add a listener to the search button
function add_listener() {
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const location = locationInput.value;
    // fetch data from API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      .then(data => update_weather(data))
      .catch(error => {
        console.error(error);
      });
  });
};

// add another event listener on the searchBtn to clear the input field when clicked by using a resetInput function and setting the input value to empty string once the function is called to the click event
function resetInput(){
  locationInput.value = '';
}

// retrieve info from our API object for only [name,main, weather and temp]
// update DOM
function update_weather(data) {
  const name = data.name;
  const main = data.main;
  const weather = data.weather;

  const temp = Math.round(main.temp);
  const humid = Math.round(main.humidity);
  const desc = weather[0].description;

  weatherInfo.innerHTML = `
    <h2>Location: ${name}</h2>
    <h3>The temperature is: ${temp}°C</h3>
    <h4>You should expect: ${desc}</h4>
    <h4>The humidity level is: ${humid}</h4>
  `;
};

// call the function to add event listener
add_listener();

// add event listener to clear input field
searchBtn.addEventListener('click', resetInput);
