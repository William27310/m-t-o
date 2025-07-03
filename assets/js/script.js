let city = 'rouen'
let apiKey = '793ebfb814fd01dc672031e81fdb85f6'
url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=fr&units=metric`

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("temp").innerHTML += `${data.list[0].main.temp}°C`
        document.getElementById("temp.max").innerHTML += `${data.list[0].main.temp_max}°C`
        document.getElementById("temp.min").innerHTML += `${data.list[0].main.temp_min}°C`
        document.getElementById("humidity").innerHTML += `${data.list[0].main.humidity}`
        document.getElementById("ville").innerHTML += `${data.city.name}`
        document.getElementById("hour").innerHTML += `${data.list[0].dt_txt}`
        document.getElementById("weather").innerHTML += `${data.list[0].weather[0].description}`
        document.getElementById("wind").innerHTML += `${data.list[0].wind.deg}`
        document.getElementById("windgust").innerHTML += `${data.list[0].wind.gust}`
        document.getElementById("windspeed").innerHTML += `${data.list[0].wind.speed}`
    })
