import React, { useState, useEffect } from 'react'
import './searchArea.css'
import { weatherIcon } from '../DataList'

function SearchArea() {

  const [keyword, setKeyword] = useState('');

  const inputArea = (e) => {
    if (e.key === 'Enter') {
      setKeyword(e.target.value)
    }
  };
  
  const clickSearchBtn = () => {
    setKeyword(document.getElementById('input-area').value)
  }
  
  useEffect(() => {
    const init = {
      method : "GET",
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${keyword}&units=metric&appid=f47b7f358e7e20494119bb7bcc6b2455`, init)
    .then(async result => {
      try {
        const weatherData = await result.json();
        
        if(weatherData.cod === '400') {
          alert('날씨가 궁금한 지역을 검색하세요.')
        }else if(weatherData.cod === '404') {
          alert('지역명을 정확하게 입력하세요.')
        }

        const weatherContents = document.querySelector('.weather-contents');

        const contents = 
        `
          <h2 class='area-name'>${weatherData.name}</h2>
          <h3 class="weather-now"><img class="weatherImg" src="./images/weather/${weatherIcon[weatherData.weather[0].icon]}.png" alt='이모티콘'/></h3>
          <p class="temp-now"><span class="main-temp">${weatherData.main.temp.toFixed(1)}&#8451;</span> 체감(${weatherData.main.feels_like.toFixed(1)}&#8451;)</p>
          <p class="temp-low-high">최저 <span class="temp-low">${weatherData.main.temp_min.toFixed(1)}&#8451;</span> | 최고 <span class="temp-high">${weatherData.main.temp_max.toFixed(1)}&#8451;</span></p>
          <p class="weather-info">습도 ${weatherData.main.humidity}% | 바람 ${weatherData.wind.speed}m/s</p>
          <p class="sunrise-sunset">일출 ${new Date(weatherData.sys.sunrise * 1000).getHours()}시 ${new Date(weatherData.sys.sunrise * 1000).getMinutes()}분 | 일몰 ${new Date(weatherData.sys.sunset * 1000).getHours()}시 ${new Date(weatherData.sys.sunset * 1000).getMinutes()}분</p>
        `
        weatherContents.innerHTML = contents;

      } catch(error) {
        console.log('weatherData 에러');
      }})

  },[keyword])

  useEffect(() => {
    const init = {
      method : "GET",
    }

    const dateTable = document.querySelector('.date');
    const timeTable = document.querySelector('.time');
    const areaTable = document.querySelector('tbody>tr');

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${keyword}&units=metric&appid=f47b7f358e7e20494119bb7bcc6b2455`, init)
    .then(async result => {
      try {
        const forecastData = await result.json();

        function setDateTable(){
          let valueDate = '';
          let tableData = `<th class="area-name" rowSpan="2">지역</th>`;
          for(let i=2; i<=22; i++){
            if (valueDate !== forecastData.list[i].dt_txt.substr(0,10)) {
              valueDate = forecastData.list[i].dt_txt.substr(0,10);
              tableData += `<th>${forecastData.list[i].dt_txt.substr(8,2)}일</th>`;
            } else {
              tableData += `<th></th>`;
            }
          }
          return tableData;
        }

        function setTimeTable(){
          let tableData = '';
          for(let i=2; i<=22; i++){
            tableData += `<th>${forecastData.list[i].dt_txt.substr(11,5)}</th>`;
          }
          return tableData;
        }

        function setAreaTable(){
          let tableData = `<tr><td>${forecastData.city.name}</td>`;
          for(let i=0; i<=20; i++){
            tableData += 
              `<td>
                <img class="weatherImg" src="./images/weather/${weatherIcon[forecastData.list[i].weather[0].icon]}.png" alt="이모티콘">
                <br/>
                ${(forecastData.list[i].main.temp).toFixed()}&#8451;
              </td>`;
          }
          tableData += `</tr>`
          return tableData;
        }
        
        dateTable.innerHTML = setDateTable();
        timeTable.innerHTML = setTimeTable();
        areaTable.innerHTML = setAreaTable();

      } catch(error) {
        console.log('forecastData 에러');
      }})

  },[keyword])


  return (
    <div className="container">
        <div className='search-container'>
            <input id="input-area" type="text" placeholder='지역명을 영문으로 입력하세요. (ex. Seoul)' onKeyDown={inputArea} />
            <button onClick={clickSearchBtn}><i className="fa fa-search" aria-hidden="true"></i></button>
        </div>
        <div className="weather-contents"></div>
        <table className='forecast-contents'>
            <thead>
              <tr className='date'></tr>
              <tr className='time'></tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
        </table>
    </div>
  )
}

export default SearchArea