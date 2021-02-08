let loc = document.getElementById("location")
let tempIcon = document.getElementById("temp_icon")
let tempValue = document.getElementById("temp-value")
let climate = document.getElementById("climate")
let iconFile;

window.addEventListener("load", () => {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            long= position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3559c131166a0ba1f134021986853d5e`;

            fetch(api)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const {name} = data;
                const{feels_like} = data.main;
                const {id, main} = data.weather[0];
                loc.textContent = name;
                climate.textContent = main;
                tempValue.textContent = Math.round(feels_like-273);
                if (id < 250){
                    tempIcon.src = './icons/iconfinder_thunderstorm-ranny_day-01_1221015.svg'
                }
                else if (id < 350){
                    tempIcon.src = './icons/iconfinder_weather05_4102316.svg'
                }
                else if (id < 550){
                    tempIcon.src = './icons/iconfinder_weather-32_1530362.svg'
                }
                else if (id < 650){
                    tempIcon.src = './icons/iconfinder_snow-cloud_2995007.svg'
                }
                else if (id < 750){
                    tempIcon.src = './icons/iconfinder_weather-32_1530362.svg'
                }
                else if (id < 850){
                    tempIcon.src = './icons/iconfinder_weather-clear-night_118958.svg'
                }

                console.log(data);
            })
        })
    }
})