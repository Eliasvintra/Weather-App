# Weather-App.

# MVP(Minimum Viable Prodocut)

-- Input location (Input-field)
-- Search location (Search button)
-- The weather report(WeatherInfo-div)

# Design <Look>

# Link style sheet

# DESCRIPTION
The project is tailor made for any user who wishes to get weather information for any location. The user is required to type the location in the text input-field and click the search button.

# Project Procedures:
1. I declared various variables; the apikey,searchbtn, locationInput and the weatherInfo.
2. I declared a function(add_listener) which has an addlistener on the submit button.It listens for a click event and fires up the fetch  request to the Openweather API.
3. Added another listener to the search button to reset the input-field once a user types in a location
4. I retrived information from the fetched data object and got the needed properties.
5. I updated the DOM to show the (name, temp, description and the humidity) in a separate div as the reponse to the search-location

# Author:
Elias Njoroge

