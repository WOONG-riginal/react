import React, { useEffect } from 'react'
import './weathermap.css'
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

        function makeWeatherWindow() {
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
        
                        // 클릭 이벤트 실행 시 생성할 오버레이 내 콘텐츠 구성
                        const weatherInfo = 
                        `
                            <div class="wrap">
                                <div class="info">
                                    <div class="title">${data.city}</div>
                                    <div class="weather">
                                        <div class="weatherImg">
                                            <img class="weatherImg" src="./images/weather/${weatherIcon[icon]}.png">
                                        </div>
                                        <div class="weatherInfo">${(weatherData.main.temp).toFixed(1)}&deg;</div>
                                    </div>
                                </div>
                            </div>
                        `
                        var customOverlay = new kakao.maps.CustomOverlay({
                            map: map,
                            position: new kakao.maps.LatLng(data.lat, data.lng),
                            content: weatherInfo
                        });
    
                        customOverlay.setMap(map);
                    } catch(error) {
        
                    }
                })

            )
        }
        makeWeatherWindow();
        
    })

  return (
    <div id="map">
    </div>
  )
}

export default WeatherMap

const cityList = [
    {
        id: 0,
        city: '서울',
        lat:'37.5642135',
        lng:'127.0016985',
    },{
        id: 1,
        city: '부산',
        lat:'35.1799222',
        lng:'129.05562775',
    },{
        id: 2,
        city: '인천',
        lat:'37.4562557',
        lng:'126.7052062',
    },{
        id: 3,
        city: '대구',
        lat:'35.8714354',
        lng:'128.601445',
    },{
        id: 4,
        city: '대전',
        lat:'36.3504119',
        lng:'127.3745475',
    },{
        id: 5,
        city: '광주',
        lat:'35.1595454',
        lng:'126.8526012',
    },{
        id: 6,
        city: '울산',
        lat:'35.5383773',
        lng:'129.3113596',
    },{
        id: 7,
        city: '백령도',
        lat:'37.9699252',
        lng:'124.7195135',
    },{
        id: 8,
        city: '춘천',
        lat:'37.8613153',
        lng:'127.7299707',
    },{
        id: 9,
        city: '강릉',
        lat:'37.751853',
        lng:'128.8760574',
    },{
        id: 10,
        city: '속초',
        lat:'38.2070148',
        lng:'128.5918488',
    },{
        id: 11,
        city: '울릉도',
        lat:'37.50000',
        lng:'130.86667',
    },{
        id: 12,
        city: '독도',
        lat:'37.240778',
        lng:'131.869556',
    },{
        id: 13,
        city: '청주',
        lat:'36.6424341',
        lng:'127.4890319',
    },{
        id: 14,
        city: '서산',
        lat:'36.7844993',
        lng:'126.4503169',
    },{
        id: 15,
        city: '당진',
        lat:'36.8936109',
        lng:'126.6283278',
    },{
        id: 16,
        city: '전주',
        lat:'35.8242238',
        lng:'127.1479532',
    },{
        id: 17,
        city: '안동',
        lat:'36.5683543',
        lng:'128.729357',
    },{
        id: 18,
        city: '목포',
        lat:'34.8118351',
        lng:'126.3921664',
    },{
        id: 19,
        city: '제주',
        lat:'33.4996213',
        lng:'126.5311884',
    },{
        id: 20,
        city: '여수',
        lat:'34.7603737',
        lng:'127.6622221',
    },{
        id: 21,
        city: '창원',
        lat:'35.2538433',
        lng:'128.6402609',
    },{
        id: 22,
        city: '포항',
        lat:'36.0190178',
        lng:'129.3434808',
    },{
        id: 23,
        city: '파주',
        lat:'37.7598688',
        lng:'126.7801781',
    },{
        id: 24,
        city: '강화',
        lat:'37.700',
        lng:'126.433 ',
    },{
        id: 25,
        city: '철원',
        lat:'38.146609',
        lng:'127.3132256',
    },{
        id: 26,
        city: '원주',
        lat:'37.3422186',
        lng:'127.9201621',
    },{
        id: 27,
        city: '태백',
        lat:'37.1640654',
        lng:'128.9855649',
    },{
        id: 28,
        city: '문경',
        lat:'36.586148',
        lng:'128.1867972',
    },{
        id: 29,
        city: '순천',
        lat:'34.950637',
        lng:'127.4872135',
    },{
        id: 30,
        city: '완도',
        lat:'34.3110596',
        lng:'126.7550541',
    },{
        id: 31,
        city: '세종',
        lat:'36.4800000',
        lng:'127.2744855',
    },{
        id: 32,
        city: '서귀포',
        lat:'33.2581205',
        lng:'126.510076',
    },{
        id: 33,
        city: '용인',
        lat:'37.2410864',
        lng:'127.1975537',
    },{
        id: 34,
        city: '이천',
        lat:'37.2719952',
        lng:'127.4348221',
    },{
        id: 35,
        city: '충주',
        lat:'36.9910113',
        lng:'127.9259497',
    },{
        id: 36,
        city: '군산',
        lat:'35.9688772',
        lng:'126.6866293',
    }
]

const weatherIcon = {
    // 맑음 (clear sky)
    '01d' : '01d',
    '01n' : '01n',
    // 흐림 (약간의 구름 	few clouds)
    '02d' : '02d',
    '02n' : '02n',
    // 흐림 (흩어진 구름 scattered clouds)
    '03d' : '02d',
    '03n' : '02n',
    // 많은 구름 (broken clouds)
    '04d' : '02d',
    '04n' : '02n',
    // 소나기 (shower rain)
    '09d' : '09d',
    '09n' : '09d',
    // 비 (rain)
    '10d' : '10d',
    '10n' : '10d',
    // 번개 (thunderstorm)
    '11d' : '11d',
    '11n' : '11d',
    // 눈 (snow)
    '13d' : '13d',
    '13n' : '13d',
    // 안개 (mist)
    '50d' : '50d',
    '50n' : '50d',
  }