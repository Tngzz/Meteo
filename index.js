var callBackGetSucces = function(data) {
      console.log("donnees api", data)
      
      var element = document.getElementById("results")
      
      var temperature = data.main.temp;
      var weatherDescription = data.weather[0].description;
      var weatherIconURL = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
      var name = data.name;

      nameDisplay(name);
      tempDisplay(temperature);
      tempDescription (weatherDescription);
      iconDisplay (weatherIconURL, name);
}

function nameDisplay (name) {
      var nameGet = document.getElementById("name");
      var content = name;
      nameGet.innerHTML = content;
}

function tempDisplay (temperature) {
      var tempGet = document.getElementById("temp");
      var contentTemp = temperature;
      tempGet.innerHTML = contentTemp;
}

function tempDescription (weatherDescription) {
      var descriptionGet = document.getElementById("description");
      var contentDescription = weatherDescription;
      descriptionGet.innerHTML = contentDescription;
}

function iconDisplay (weatherIconURL, name) {
      var iconGet = document.getElementById("icon");
      var contenticon = weatherIconURL;
      iconGet.innerHTML = contenticon;
      iconGet.src = contenticon;
      iconGet.alt = name;
      console.log(weatherIconURL);
}


function buttonClickGET() {
      
      var queryLoc = document.getElementById("queryLoc").value;

      var url = "https://api.openweathermap.org/data/2.5/weather?q="+queryLoc+"&appid=57083c7972fdce1fe79297e5e07795e5&units=metric&lang=fr"

      $.get(url, callBackGetSucces).done(function () {

      })
      // .fail(function (){
      //       alert("error");
      // })é"'((-))
      .always(function (){

      });
}
  
// a utiliser pour les prédiction
// https://api.openweathermap.org/data/2.5/forecast?q=hoerdt&appid=57083c7972fdce1fe79297e5e07795e5&units=metric&lang=fr