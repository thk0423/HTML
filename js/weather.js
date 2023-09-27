//6116fdf29c22193792085002d7a1f507
function onGeoOk(position){
    // console.log(position);
    const API_KEY = "6116fdf29c22193792085002d7a1f507";
    const lat = position.coords.latitude;
    //37.5868432;
    const lon = position.coords.longitude;
    //126.9218479;
    console.log(`당신이 있는 곳은 위도 ${lat}, 경도 ${lon}입니다.`)
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
//units=metric
    fetch(url).then(response => response.json()).then(data=>{
        console.log(data.name, data.weather[0].description, data.main.temp);
        const weahter = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weahter.innerText = data.weather[0].description;
        city.innerText = data.name;
    });


}

function onGeoError(){
    console.log("찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);