//create variables to store the relevant values
const apiKey = '08e9c08abbba47b6ca1684e475d17a6d';
const searchBtn = document.getElementById('search-btn');
const locationInput = document.getElementById('location');
const weatherInfo = document.getElementById('weather-info');

//add a listener to the search button
function add_listener() {
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const location = locationInput.value; // assigning location to the input value whereby the user types the location he/she wants to search
    // fetch data from API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      //.then(res => console.log(res.json()))
      .then(data => update_weather(data))
      //add catch error
      .catch(error => {
        console.error(error);
      });
  });
};
// adding a reset method to clear the input section once a user enters a location
function resetInput(){
  locationInput.addEventListener('click', () => {
  locationInput.reset();
});
}

// Retrive info from our API OBJECT for only [name,main, weather and temp]
//updating DOM
function update_weather(data) {
  // get properties of the data object
  const name = data.name;
  const main = data.main;
  const weather = data.weather;

  const temp = Math.round(main.temp);// adding a method to round off to nearest integer
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
 