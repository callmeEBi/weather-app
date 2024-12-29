let weather_data = {
  sample: ["temp", "condition", "humiditiy", "wind speed"],
  tehran: [43, "sunny", 26, 32],
  tabriz: [0, "snow", 1, 50],
};

x = weather_data.find(function (item) {
  return item == "tehran";
});

console.log(x);
