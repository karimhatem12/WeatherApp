let ResponseData;
InpCity = document.getElementById("city").innerHTML
async function getText(text, q) {
    var myObject = await fetch(`https://api.weatherapi.com/v1/${text}.json?key=70d15c987630433581e205835230908&q=${q}&days=3`);
    var final = await myObject.json()
    // console.log(final)
    return await final
}

inp = document.getElementById('input')
inp.addEventListener("keyup", function (e) {
    console.log(e.target.value.length)
    if (e.target.value.length > 2) {
        getText('forecast', e.target.value).then(final => {
            ResponseData = final;
            console.log(ResponseData)
            document.getElementById("city").innerHTML = ResponseData.location.name
            document.getElementById("temp").innerHTML = ResponseData.current.temp_c + '°C'
            document.getElementById("imgData").src = "https://" + ResponseData.current.condition.icon
            document.getElementById("textData").innerHTML = ResponseData.current.condition.text
            document.getElementById("todayMinTempp").innerHTML = ResponseData.forecast.forecastday[1].day.mintemp_c + '°C'
            document.getElementById("todayMaxTempp").innerHTML = ResponseData.forecast.forecastday[1].day.maxtemp_c + '°C'
            document.getElementById("tommorMinTempp").innerHTML = ResponseData.forecast.forecastday[2].day.mintemp_c + '°C'
            document.getElementById("tommorMaxTempp").innerHTML = ResponseData.forecast.forecastday[2].day.maxtemp_c + '°C'
            document.getElementById("nameTempToday").innerHTML = ResponseData.forecast.forecastday[1].day.condition.text
            document.getElementById("nameTempTommor").innerHTML = ResponseData.forecast.forecastday[2].day.condition.text
            console.log(ResponseData.forecast.forecastday[1].day.condition.icon)
            document.getElementById("ImgTomro").src = "https://" + ResponseData.forecast.forecastday[1].day.condition.icon
            document.getElementById("ImgafterTomro").src = "https://" + ResponseData.forecast.forecastday[2].day.condition.icon
            console.log(ResponseData)
        });
    }
});