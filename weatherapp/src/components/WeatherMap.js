import React, { useEffect } from 'react'
import './weathermap.css'
import { cityList, weatherIcon } from '../DataList'
const { kakao } = window;

function WeatherMap() {

    useEffect( () => {
        const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = { 
                center: new kakao.maps.LatLng(36.5, 127.5), // 지도의 중심좌표
                level: 12 // 지도의 확대 레벨
            };
        
        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        const map = new kakao.maps.Map(mapContainer, mapOption); 

        // 지도의 확대, 축소 레벨 제한 (10~12)
        map.setMinLevel(11); map.setMaxLevel(12);

        function setWeatherWindow() {
            const init = {
                method: "GET",
            };
            cityList.forEach( data =>
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lng}&units=metric&appid=f47b7f358e7e20494119bb7bcc6b2455`, init)
                .then(async response => {
                    try {
                        const weatherData = await response.json();
        
                        // 날씨 아이콘 지정
                        const icon = weatherData.weather[0].icon;
        
                        const weatherInfo = 
                        `
                            <div class="wrap">
                                <div class="info">
                                    <div class="title">${data.city}</div>
                                    <div class="weather">
                                        <div class="weatherImg">
                                            <img class="weatherImg" src="./images/weather/${weatherIcon[icon]}.png">
                                        </div>
                                        <div class="weatherInfo">${(weatherData.main.temp).toFixed()}&#8451;</div>
                                    </div>
                                </div>
                            </div>
                        `
                        var customOverlay = new kakao.maps.CustomOverlay({
                            map: map,
                            position: new kakao.maps.LatLng(data.lat, data.lng),
                            content: weatherInfo
                        });
    
                        // 해당 좌표 지역에 날씨정보 생성
                        customOverlay.setMap(map);
                    } catch(error) {
                        console.log('weatherData 에러');
                    }
                })
            )
        }
        setWeatherWindow();
        
    })

    return (
        <div id="map">
        </div>
    )
}

export default WeatherMap