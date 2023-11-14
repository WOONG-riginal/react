import React, { useEffect } from 'react'
import './weathermap.css'
const { kakao } = window;

function WeatherMap() {

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

        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 날씨정보를 보여주는 오버레이 정보
        const weatherInfo = 
        `
            <div class="wrap">
            <div class="info">
                <div class="title">서울특별시</div>
                <div class="weather">
                    <div class="weatherImg">
                        <img src="./images/qm.png" alt="날씨이미지">
                    </div>
                    <ul class="weatherInfo">
                        <li>현재기온 : 10&deg;</li>
                        <li>최고기온 : 12&deg;</li>
                        <li>최저기온 : 2&deg;</li>
                        <li>체감온도 : 8&deg;</li>
                    </ul>
                </div>
            </div>
            </div>
        `

        // 오버레이 생성
        const overlay = new kakao.maps.CustomOverlay({
            content: weatherInfo,
            position: marker.getPosition()
        });

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
            
            // 클릭한 위도, 경도 정보를 가져옵니다 
            const latlng = mouseEvent.latLng;
            
            // 마커와 오버레이의 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);                
            overlay.setPosition(latlng);

            // 클릭한 위치의 위도는 latlng.getLat(), 경도는 latlng.getLng()로 추출
            
            lat = latlng.getLat();
            lng = latlng.getLng();
        });

        // 마커에 마우스를 올렸을 때 오버레이를 표시합니다
        kakao.maps.event.addListener(marker, 'mouseover', function() {
            overlay.setMap(map);
        });
        kakao.maps.event.addListener(marker, 'mouseout', function() {
            overlay.setMap(null);
        });

        // 날씨 api 사용하기 (fetch 활용?)
        // fetch를 실행. 첫번째 인자 = 주소값, 두번째 인자 = 옵션값 넣어줌.
        // 주소에 필요한 옵션 파라미터를 넣어줌. 여기서는 지역값과 api key를 넣었음. (?q="지역값"&appid="API key")
        // then = fetch가 이루어지면 실행되는 함수로 => async와 await을 통해 데이터를 받을 수 있음.
    })

  return (
    <div id="map" style={{width:'100%', height:'930px'}}>
    </div>
  )
}

export default WeatherMap