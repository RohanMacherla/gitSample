function getWeather(){
    let city=document.getElementById("city").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&metrics&units&appid=197466d47be58a37a09be731456b85b7`)
    .then(response=>response.json())
    .then(data=>{
        document.getElementById("container").innerText=`${city}
        
        Tempurature : ${data.main.temp}`;
        
    })
    .catch(error=>console.log(error))
}