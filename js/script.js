function search() {
    const APIKey = "856fc01b5ad5b248910f5db280e4478d";
    let city = document.querySelector("city-search").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`;
    let fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=imperial`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            document.querySelector(".city-name").innerText = city;
            document.querySelector(".date").innerText = moment.unit(data.dt).format("MMM Do YY");
            document.querySelector(".icon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            document.querySelector(".temp").innerText = `Temp: ${data.main.temp}F`;
            document.querySelector(".wind").innerText = `Windspeed: ${data.wind.speed}MPH`;
            document.querySelector(".humidity").innerText = `Humidity: ${data.main.humidity}%`;

            fetch(fiveDayURL)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);


                })
        })
}

document.querySelector(".search-button").addEventListener("click", search());