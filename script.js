document.querySelector(".search-button").addEventListener("click", function () {
    const APIKey = "856fc01b5ad5b248910f5db280e4478d";
    let city = document.querySelector(".city-search").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`;
    let fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=imperial`;

    document.querySelector(".weather").style.display = "block";

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            document.querySelector(".city-name").innerText = city;
            document.querySelector(".date").innerText = moment.unix(data.dt).format("MMM Do");
            document.querySelector(".icon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            document.querySelector(".temp").innerText = `Temp: ${data.main.temp}F`;
            document.querySelector(".wind").innerText = `Windspeed: ${data.wind.speed}MPH`;
            document.querySelector(".humidity").innerText = `Humidity: ${data.main.humidity}%`;

            fetch(fiveDayURL)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);

                    for (var i = 7; i < data.list.length; i += 7) {
                        var date = document.createElement("p");
                        date.innerText = moment.unix(data.list[i].dt).format("MMM Do");
                    }
                    // Day 2
                    document.querySelector(".date2").innerText = moment().add(1, "days").format("MMM Do");
                    document.querySelector(".temp2").innerText = `Temp: ${data.list[0].main.temp}F`;
                    document.querySelector(".wind2").innerText = `Windspeed: ${data.list[0].wind.speed}MPH`;
                    document.querySelector(".humidity2").innerText = `Humidity: ${data.list[0].main.humidity}%`;

                    // Day 3
                    document.querySelector(".date3").innerText = moment().add(2, "days").format("MMM Do");
                    document.querySelector(".temp3").innerText = `Temp: ${data.list[7].main.temp}F`;
                    document.querySelector(".wind3").innerText = `Windspeed: ${data.list[7].wind.speed}MPH`;
                    document.querySelector(".humidity3").innerText = `Humidity: ${data.list[7].main.humidity}%`;

                    // Day 4
                    document.querySelector(".date4").innerText = moment().add(3, "days").format("MMM Do");
                    document.querySelector(".temp4").innerText = `Temp: ${data.list[15].main.temp}F`;
                    document.querySelector(".wind4").innerText = `Windspeed: ${data.list[15].wind.speed}MPH`;
                    document.querySelector(".humidity4").innerText = `Humidity: ${data.list[15].main.humidity}%`;

                    // Day 5
                    document.querySelector(".date5").innerText = moment().add(4, "days").format("MMM Do");
                    document.querySelector(".temp5").innerText = `Temp: ${data.list[23].main.temp}F`;
                    document.querySelector(".wind5").innerText = `Windspeed: ${data.list[23].wind.speed}MPH`;
                    document.querySelector(".humidity5").innerText = `Humidity: ${data.list[23].main.humidity}%`;
                })
        })
});