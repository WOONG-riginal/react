import React, { useEffect } from 'react'
import './weathermap.css'
const { kakao } = window;

function WeatherMap() {

    // 위도와 경도 변수 선언 -> 이후 지도 api를 통해 데이터를 가져다 사용
    let lat;
    let lng;

    useEffect( () => {
        const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = { 
                center: new kakao.maps.LatLng(36.5, 127.5), // 지도의 중심좌표
                level: 12 // 지도의 확대 레벨
            };
        
        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        const map = new kakao.maps.Map(mapContainer, mapOption); 

        // 지도의 확대, 축소 레벨 제한 (10~12)
        map.setMinLevel(10); map.setMaxLevel(12);

        const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // 마커이미지의 주소입니다    
                imageSize = new kakao.maps.Size(24, 35), // 마커이미지의 크기입니다
                imageOption = {offset: new kakao.maps.Point(12, 35)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
        
        // 지도를 클릭한 위치에 표출할 마커입니다
        const marker = new kakao.maps.Marker({ 
            // 지도 중심좌표에 마커를 생성합니다 
            position: new kakao.maps.LatLng(37.5665, 126.9780),
            image: markerImage // 마커이미지 설정
        });
        
        // 오버레이 생성
        // 이후 오버레이를 변경시켜야 하므로 const 대신 var 변수 선언
        // const로 선언하더라도 변경시킬 수 있는 방법은 다시 고민해보겠음
        var overlay = new kakao.maps.CustomOverlay({
            content: ``,
            position: marker.getPosition()
        });

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
            
            // 지도에 마커를 표시합니다
            marker.setMap(map);

            // 클릭한 위도, 경도 정보를 가져옵니다 
            const latlng = mouseEvent.latLng;
            
            // 마커와 오버레이의 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);                
            overlay.setPosition(latlng);

            // 클릭한 위치의 위도는 latlng.getLat(), 경도는 latlng.getLng()로 추출
            lat = latlng.getLat();
            lng = latlng.getLng();

            // 날씨 api 사용하기 (fetch 활용?)
            // GET method 사용
            const init = {
                method: "GET",
            };

            // fetch를 실행. 첫번째 인자 = 주소값, 두번째 인자 = 옵션값
            // 주소에 필요한 옵션 파라미터를 넣어줌. 여기서는 위도, 경도 좌표와 api key를 사용
            // then = fetch가 이루어지면 실행되는 함수로 => async와 await을 통해 데이터를 받음
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f47b7f358e7e20494119bb7bcc6b2455`, init)
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
                                <div class="title">${weatherData.name}</div>
                                <div class="weather">
                                    <div class="weatherImg">
                                    <img class="weatherImg" src="./images/weather/${weatherIcon[icon]}.png">
                                    </div>
                                    <ul class="weatherInfo">
                                        <li>현재기온 : ${(weatherData.main.temp).toFixed(1)}&deg;</li>
                                        <li>최고기온 : ${(weatherData.main.temp_max).toFixed(1)}&deg;</li>
                                        <li>최저기온 : ${(weatherData.main.temp_min).toFixed(1)}&deg;</li>
                                        <li>체감온도 : ${(weatherData.main.feels_like).toFixed(1)}&deg;</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `
        
                    overlay = new kakao.maps.CustomOverlay({
                        content: weatherInfo,
                        position: marker.getPosition()
                    });

                } catch(error) {

                }
            })


        });

        // 마커를 클릭했을 때 오버레이를 표시하고, 마커를 이동시키면 이전 오버레이는 없애기
        kakao.maps.event.addListener(marker, 'click', function() {
            overlay.setMap(map);
        });
        kakao.maps.event.addListener(map, 'click', function() {
            overlay.setMap(null);
        });

    })

  return (
    <div id="map">
    </div>
  )
}

export default WeatherMap

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