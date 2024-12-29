let $ = document;
let searchBar = $.querySelector("#search_bar");
let searchButton = $.querySelector("#search_button");
let container = $.querySelector(".container");
let firstDiv = $.createElement("div");
let firstH2 = $.createElement("h2");
let secondH2 = $.createElement("h2");
let firstP = $.createElement("p");
let secondP = $.createElement("p");
let thirdP = $.createElement("p");
let selectedCity;
let weather_data = {
  tehran: [43, "sunny", 26, 32],
  tabriz: [0, "snow", 1, 50],
};

firstDiv.className = "weather_information";
searchButton.addEventListener("click", searcher);

function searcher() {
  selectedCity = searchBar.value;

  for (i in weather_data) {
    if (i == selectedCity) {
      firstDiv.innerHTML = "";
      firstH2.innerHTML = `Weather in ${selectedCity}`;
      secondH2.innerHTML = `${weather_data[selectedCity][0]} °C`;
      firstP.innerHTML = `${weather_data[selectedCity][1]}`;
      secondP.innerHTML = `Humidity = ${weather_data[selectedCity][2]}%`;
      thirdP.innerHTML = `wind speed = ${weather_data[selectedCity][3]} km/h`;
      firstDiv.append(firstH2, secondH2, firstP, secondP, thirdP);
      container.append(firstDiv);
      return;
    }
  }
  firstDiv.append("city wasn't found");
  container.append(firstDiv);
}
