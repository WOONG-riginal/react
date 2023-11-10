import React, { useEffect, useState } from 'react'
import './reset.css'
import './font.css'
import './Weather.css'
import 'weather-icons/css/weather-icons.min.css'

/* #1. 컴포넌트 메서드 */
function Weather() {
  // 검색 지역 초기값 설정 및 바뀌는 값 저장소
  // useState를 통해 동적으로 바뀔 수 있도록 설정.
  // areaValue => api에서 사용하는 주소 값
  // areaKr => 사용자에게 표시할 주소 값을 삽입!
  const [areaValue, setAreaValue] = useState('Seoul');
  const [areakr, setAreaKr] = useState('서울특별시');
/*
  # fetch 사용법 - https://www.daleseo.com/js-window-fetch/
  : fetch() 함수는 첫번째 인자로 URL, 두번째 인자로 옵션 객체를 받고, Promise 타입의 객체를 반환. 
    반환된 객체는, API 호출이 성공했을 경우에는 응답(response) 객체를 resolve하고, 
    실패했을 경우에는 예외(error) 객체를 reject합니다.
  [소스예시]
  fetch(url, options)
    .then((response) => console.log("response:", response))
    .catch((error) => console.log("error:", error));
  [옵션(options) 객체]
    a. HTTP 방식(method), 
    b. HTTP 요청 헤더(headers), 
    c. HTTP 요청 전문(body) 등을 설정. 
  [응답(response) 객체]
    a. HTTP 응답 상태(status), 
    b. HTTP 응답 헤더(headers), 
    c. HTTP 응답 전문(body) 등을 읽어올 수 있음.
  [GET 호출]
  : 단순히 원격 API에 있는 데이터를 가져올 때 쓰이는 GET 방식의 HTTP 통신.
  fetch() 함수는 디폴트로 GET 방식으로 작동, GET 방식은 요청 전문을 받지 않기 때문에 옵션 인자가 필요가 없음.
  [코드예시]
  fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>
  console.log(response) // (콘솔에서보면) 응답 객체를 통해 응답 상태가 200 OK
  [REST API]
  => 대부분의 REST API들은 JSON 형태의 데이터를 응답하기 때문에, 응답(response) 객체는 json() 메서드를 제공
  => 이 메서드를 호출하면, 응답(response) 객체로 부터 JSON 포멧의 응답 전문을 자바스크립트 객체로 변환하여 얻을 수 있음.
);
*/

/* #2. useEffect => API 데이터 가져오는 기능,  */
  // useEffect는 클래스형의 생명주기함수를 함수형 컴포넌트에서도 사용할 수 있도록 나온 기능임!
  // 첫번째 인자 = 실행시킬 함수, 두번째 인자에는 검사할 변수 값(배열로 넣습니다![])을 넣어 변수값이 변경될 때 마다 실행됨.
  // 두번째 인자를 안 넣을 경우 => 리렌더링될때마다 실행되며, 빈배열을 넣게될 시 => 최초 1회만 실행!
  // useEffect는 처음 실행할 때 반드시 한번 실행됨!
  useEffect(()=>{
    // 외부 데이터를 가져오도록 fetch 함수를 사용.
    // jquery의 ajax를 사용해보셨다면 이해하기 편할 수 있습니다!
    // fetch를 통해 외부 데이터를 json으로 받아올 수 있음.

    // fetch 기본설정
    // 옵션이 여러가지 있지만.. 기본 옵션인 GET method로 받은 설정만 넣음.
    // form 태그의 개념과 비슷합니다!
    const init = {
      method: "GET", // GET, POST, PUT, DELETE...
    };

    // 작성할 도큐먼트 찾기
    const weatherEl = document.querySelector('.weather');
    weatherEl.innerHTML = `<img src="./images/load.gif" alt="로딩화면"/>`;

    // fetch를 실행. 첫번째 인자 = 주소값, 두번째 인자 = 옵션값 넣어줌.
    // 주소에 필요한 옵션 파라미터를 넣어줌. 여기서는 지역값과 api key를 넣었음. (?q="지역값"&appid="API key")
    // then = fetch가 이루어지면 실행되는 함수로 => async와 await을 통해 데이터를 받을 수 있음.
    // https://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=81f458812bf2ce501b166301fae5f46a 
    // => ?q=Seoul로 변경후 주소창 확인해 볼것
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${areaValue}&units=metric&appid=f47b7f358e7e20494119bb7bcc6b2455`, init)
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${areaValue}&units=metric&appid=cc2f3c97f80d9cd216c70602a5b38378`, init)
    .then(async response => {
      try {
        // async와 await은 비동기 함수로, 결과 값을 받을때 까지 기다렸다가 받으면 실행.
        // api를 호출했을 때 결과값을 response 인자로 받을 수 있는데, json()함수를 통해 json객체로 받아줌!!
        const data = await response.json();
        console.log('fetch이용 api json데이터 출력 => ' + data); // object Objedct 나옴 , 하지마

        // json 데이터 확인 후, 필요 데이터를 꺼내서 html에 적용! => data 변수로 위에서 받았음
        function dataWrite(){
          // 일출 = unix, UTC 타입으로 반환된 값
          const sunriseHour = new Date(data.sys.sunrise * 1000).getHours(); // 밀리세컨 만들어서 시간전체정보에 .getHour()로 시간만 추출
          console.log('일출시간 전체 정보 출력 = ',Date(data.sys.sunrise * 1000));
          const sunriseMin = new Date(data.sys.sunrise * 1000).getMinutes();
          console.log('일출시간 분으로 출력 = ',sunriseMin);
          // 일몰
          const sunsetHour = new Date(data.sys.sunset * 1000).getHours();
          const sunsetMin = new Date(data.sys.sunset * 1000).getMinutes();
          // 아이콘 작성하기 = 아래 이미지에 적용
          const icon = data.weather[0].icon; // 01n or 01d
          const bg = document.querySelector('body');

          // api 기본 아이콘 값에 낮과 밤을 나타내는 n와 d가 들어있어 
          // => n이 들어있을 시에는 낮, d가 들어있을 시에는 밤으로 배경색을 줌.
          if(icon.indexOf('n') > 0){ // api 아이콘이 낮이면
            if(bg.classList.contains('day')){ // Weather.css 클래스가 day면
              bg.classList.remove('day'); // day 제거
            }
            bg.classList.add('night'); // 클래스에 night 추가
          }else if(icon.indexOf('d') > 0){ // api 아이콘이 밤이면
            if(bg.classList.contains('night')){
              bg.classList.remove('night');
            }
            bg.classList.add('day'); // 클래스에 day 추가
          }
          // return으로 document에 작성될 값을 설정. = 첫화면에 그려질 내용 코딩
          return(
            // ${weatherIcon[icon]}.png => 아래 수퍼컴포넌트에서 날씨 아이콘 가져옴
            // ${areakr} => 브라우저 메인에 표시될 한글로 표시될 지역명 (예)서울특별시
            // 현재기온 : => 나머지는 받은 api data에서 원하는 출력하면 됨
            `
              <div class="weatherIcon">
                <img class="weatherImg" src="./images/weather/${weatherIcon[icon]}.png">
              </div>

              <h2>${areakr}</h2>
              <div>현재기온 : 
                ${data.main.temp}&deg; 최고기온 : ${data.main.temp_max}&deg; 최저기온 : 
                ${data.main.temp_min}&deg; 체감온도 : ${data.main.feels_like}&deg;
              </div>
              <div>
                일출 : ${sunriseHour}시 ${sunriseMin}분 / 일몰 : ${sunsetHour}시 ${sunsetMin}분
              </div>
            `
          )
        } // end of method
        weatherEl.innerHTML = dataWrite(); // 함수 <div className='weather'></div>에 적용
      } catch(error) {
  
    }});
  },[areaValue, areakr]); // 의존관계 삽입 => data변경시 useEffect() 재실행 | [areaValue=주소창 지역, areakr=한글표시 지역명= 아래 코딩해놓음]

/* #3.최초 렌더링 될 시, select 폼에 미리 작성해놓은 객체를 option으로 넣음! */
/* areaGroup = 하단에 수퍼컴포넌트에서 지역정보 불러옴 */
  useEffect(()=>{
    const areaList = document.querySelector('.areaList');
    const areaWrite = areaGroup.map(char => {
      return (
        `<option value="${char.kr}">${char.kr}</option>`
      )
    }).join('');  // join() 메서드 = 배열의 모든 요소를 연결해 하나의 문자열로 만듦.
    // 지역 정보를 얻어와서 option 
    areaList.innerHTML = areaWrite;
  },[])

/* #4. select값을 변경했을 시 날씨정보가 해당 도시로 바뀌도록 설정 함수. */
  function changeSelect(e){
    e.preventDefault();
    // select 선택된 지역을 할당
    const areaName = document.querySelector('#select').value;
    // 아래 수퍼컴포넌트에서 값 가져옴
    areaGroup.forEach(result => {
      if(areaName.indexOf(result.kr) > -1){ // 한글 도시명으로 값이 있으면 | 배열은 0부터니까 -1로
        setAreaKr(result.text); // 동적값 바꿔줌
        setAreaValue(result.en);
      }else if(areaName.toLowerCase().indexOf(result.en.toLowerCase()) > -1){ // 영문 도시명으로 값이 있으면 
        setAreaKr(result.text);
        setAreaValue(result.en);
      }
    })
  }
/* 브라우저 하단에 폼 박스 그려줌 */
  return (
    <section>
      <div className='weather'></div>
      <h6>지역 변경</h6>
      <div className='formBox'>
{/* 
  React 에서의 this = 자바스크립트와 동작방식 같음 (객체지항에서는 객체자체를 의미)
                    = 즉, 렌더링될 때 이 component 안의 메소드야! 라고 전달하는 것과 같은 의미.
  a. 컴포넌트의 render()함수가 실행되면 DOM이 그려진다
     이때 this 는 component 내부에서 선언한 method 객체를 가리키는 것이 맞지만,
  b. event handler함수가 호출될 때의 this는 component 내부에서 선언한 method 객체를 가리키는 것이 아닌 
     => 전역객체(Window)를 의미
     왜냐하면 this 라는 값은 호출하는 문맥(context)에 의해 좌우되는데 
     클릭이 실행되는 문맥이 바로 전역(window)객체이기 때문
     [결론적으로 그래서] bind 함수를 사용 = 바인드하는 함수에서 사용하는 this의 대상을 지정해주는 역할
  c. [bind() 함수]
    : bind 함수는 바인드하는 함수에서 사용하는 this의 대상을 지정해주는 역할을 함
  d. React 에서의 bind()
     bind()함수는 전달된 인자를 this로 보내는 바인딩 함수를 만드는데(원본 함수와 동일한 기능을 하는 바인딩된 새로운 함수가 만들어 짐)
     여기서 this = 다른 언어와 달리 실행 문맥(context)에 따라 변함.
*/}
      </div>
      {/* #3의 option값 얻어와서 #4의 changeSelect실행 */}
      <select id="select" className='areaList' onChange={changeSelect.bind(this)}>
      </select>
    </section>
  )
}

export default Weather;

// 날씨 api 사이트를 통해 영어 이름을 불러와서 객체 리스트로 저장.
// id는 고유값으로 넣어두었고, 각 kr, text는 수동으로 작성함.
// 특이한 경우에는 comment도 달아두었습니다!
const areaGroup = [{
  id: 0,
  kr: '서울',
  en: 'Seoul',
  text: '서울특별시',
},{
  id: 1,
  kr: '부산',
  en: 'Busan',
  text: '부산광역시',
},{
  id: 2,
  kr: '인천',
  en: 'Incheon',
  text: '인천광역시',
},{
  id: 3,
  kr: '대구',
  en: 'Daegu',
  text: '대구광역시',
},{
  id: 4,
  kr: '대전',
  en: 'Daejeon',
  text: '대전광역시',
},{
  id: 5,
  kr: '광주',
  en: 'Gwangju',
  text: '광주광역시',
},{
  id: 6,
  kr: '수원',
  en: 'Suwon-si',
  text: '경기도 수원시',
},{
  id: 7,
  kr: '울산',
  en: 'Ulsan',
  text: '울산광역시',
},{
  id: 8,
  kr: '고양',
  en: 'Goyang-si',
  text: '경기도 고양시',
},{
  id: 9,
  kr: '용인',
  en: 'Yongin',
  text: '경기도 용인시',
},{
  id: 10,
  kr: '창원',
  en: 'ChangWon',
  text: '경상남도 창원시',
},{
  id: 11,
  kr: '성남',
  en: 'Seongnam-si',
  text: '경기도 성남시',
},{
  id: 12,
  kr: '청주',
  en: 'Cheongju-si',
  text: '충청북도 청주시',
},{
  id: 13,
  kr: '부천',
  en: 'Bucheon-si',
  text: '경기도 부천시',
},{
  id: 14,
  kr: '화성',
  en: 'Hwaseong-si',
  text: '경기도 화성시',
},{
  id: 15,
  kr: '남양주',
  en: 'Hwado',
  text: '경기도 남양주시',
  comment: '날씨 위치가 남양주시 화도읍으로 찍혀있어서 화도읍 날씨로 적용하였습니다.',
},{
  id: 16,
  kr: '전주',
  en: 'Jeonju',
  text: '전라북도 전주시',
},{
  id: 17,
  kr: '천안',
  en: 'Cheonan',
  text: '충청남도 천안시',
},{
  id: 18,
  kr: '안산',
  en: 'Ansan-si',
  text: '경기도 안산시',
},{
  id: 19,
  kr: '안양',
  en: 'Anyang-si',
  text: '경기도 안양시',
},{
  id: 20,
  kr: '김해',
  en: 'Gimhae',
  text: '경상남도 김해시',
},{
  id: 21,
  kr: '평택',
  en: 'Pyeongtaek-si',
  text: '경기도 평택시',
},{
  id: 22,
  kr: '포항',
  en: 'Pohang',
  text: '경상북도 포항시',
},{
  id: 23,
  kr: '제주',
  en: 'Jeju',
  text: '제주특별자치도 제주시',
},{
  id: 24,
  kr: '시흥',
  en: 'Ansan-si',
  text: '경기도 시흥시',
  comment: '시흥시 날씨를 지원하지 않아, 가까운 안산 날씨로 적용하였습니다.'
},{
  id: 25,
  kr: '파주',
  en: 'Paju',
  text: '경기도 파주시',
},{
  id: 26,
  kr: '의정부',
  en: 'Uijeongbu-si',
  text: '경기도 의정부시',
},{
  id: 27,
  kr: '김포',
  en: 'Gimpo-si',
  text: '경기도 김포시',
},{
  id: 28,
  kr: '구미',
  en: 'Gumi',
  text: '경상북도 구미시',
},{
  id: 29,
  kr: '경기도 광주',
  en: 'Goenae',
  text: '경기도 광주시',
  comment: '날씨 위치가 광주시 남종면으로 찍혀있어서 남종면의 날씨로 적용하였습니다.'
}]

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