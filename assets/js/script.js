let city = 'rouen'
let apiKey = '793ebfb814fd01dc672031e81fdb85f6'
url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=fr&units=metric`

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("temp").innerHTML += `${data.list[0].main.temp}°C`
        document.getElementById("humidity").innerHTML += `${data.list[0].main.humidity}`
        document.getElementById("ville").innerHTML += `${data.city.name}`
        document.getElementById("hour").innerHTML += `${data.list[0].dt_txt}`
        document.getElementById("weather").innerHTML += `${data.list[0].weather[0].description}`
        document.getElementById("wind").innerHTML += `${data.list[0].wind.deg}`
        document.getElementById("windgust").innerHTML += `${data.list[0].wind.gust}`
        document.getElementById("windspeed").innerHTML += `${data.list[0].wind.speed}`

        // Prévision 5 jours
        // 05/07
        document.getElementById("05/07tempglobalmax").innerHTML += `${data.list[6].main.temp}°C`
        document.getElementById("05/07tempglobalmin").innerHTML += `${data.list[10].main.temp}°C`

        // 06/07
        document.getElementById("06/07tempglobalmax").innerHTML += `${data.list[18].main.temp}°C`
        document.getElementById("06/07tempglobalmin").innerHTML += `${data.list[15].main.temp}°C`

        //07/07
        document.getElementById("07/07tempglobalmax").innerHTML += `${data.list[27].main.temp}°C`
        document.getElementById("07/07tempglobalmin").innerHTML += `${data.list[22].main.temp}°C`

        // 08/07
        document.getElementById("08/07tempglobalmax").innerHTML += `${data.list[33].main.temp}°C`
        document.getElementById("08/07tempglobalmin").innerHTML += `${data.list[30].main.temp}°C`

        // 09/07
        document.getElementById("09/07tempglobalmax").innerHTML += `${data.list[35].main.temp}°C`
        document.getElementById("09/07tempglobalmin").innerHTML += `${data.list[34].main.temp}°C`

        // Plus de détails
        
    })
