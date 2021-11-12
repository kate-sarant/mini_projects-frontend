//making a let with the  api key link -->  http://api.openweathermap.org/data/2.5/weather?q=Athens&units=metric&appid=45d578be6b42425baf50dd4d11bef893
// which contains fetchWeather function
// And taking the data that we want from the weather api key(temp,description,max-temp etc)
let weather = {
  apiKey:"45d578be6b42425baf50dd4d11bef893",
  fetchWeather:function(city){
    fetch(
        "http://api.openweathermap.org/data/2.5/weather?q="
        + city
        +"&units=metric&appid="
        + this.apiKey
    ).then((response) => response.json()).then((data) => this.displayWeather(data));

  },
  //display api -data
  displayWeather: function(data){
    const { name } = data;
    const { icon, description} = data.weather[0];
    const { temp ,humidity,temp_max,temp_min,feels_like} = data.main;
    const {speed} = data.wind;


    console.log(name, icon, description, temp ,humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temperature").innerText= Math.round(temp) + "℃" ;
    document.querySelector(".temp_max").innerText= "M:" + Math.round(temp_max)+('\xB0')  ;
    document.querySelector(".temp_min").innerText= "L:"+ Math.round(temp_min) +('\xB0');
    document.querySelector(".humidity").innerText= "Humidity: " + humidity +"%";
    document.querySelector(".wind").innerText= "Winds speed: " + speed +"km/h" ;
    document.querySelector(".feels_like").innerText= "Feels like: " + Math.round(feels_like )+('\xB0');
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name +"')"
  },
  //take the value from the search-bar  // activation

   search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};
/// after clicking the search-button or enter the proccess of searching will be activated.
// click event and keyup event (JQuery).
document
.querySelector("button")
.addEventListener("click",function(){
  weather.search();

});
document
  .querySelector(".search-bar")
  .addEventListener("keyup",function(event){
  if (event.key =="Enter"){
    weather.search();
  }
});
//setup  a choosen city with the current tempt and weather details to be loaded by defult.
weather.fetchWeather("Athens");


//What is response in JS?
//constructor. Represents a response from a web request initiated by fetch().
//fetch(), Request and Response are a new, low level replacement for XMLHttpRequest.
