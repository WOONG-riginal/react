import React, { useState, useEffect } from 'react'
import './searchArea.css'
import { weatherIcon } from '../DataList'

function SearchArea() {

  const [keyword, setKeyword] = useState('Seoul');
  
  useEffect(() => {
    const init = {
      method : "GET",
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${keyword}&units=metric&appid=f47b7f358e7e20494119bb7bcc6b2455`, init)
    .then(async result => {
      try {
        const weatherData = await result.json();

        const weatherContents = document.querySelector('.weather-contents');

        const contents = 
        `
          <h2 class='area-name'>${keyword}</h2>
          <h3 class="weather-now"><img class="weatherImg" src="./images/weather/${weatherIcon[weatherData.weather[0].icon]}.png" alt='이모티콘'/></h3>
          <p class="temp-now"><span class="main-temp">${weatherData.main.temp}&#8451;</span> 체감(${weatherData.main.feels_like}&#8451;)</p>
          <p class="temp-low-high">최저 <span class="temp-low">${weatherData.main.temp_min}&#8451;</span> | 최고 <span class="temp-high">${weatherData.main.temp_max}&#8451;</span></p>
          <p class="weather-info">습도 ${weatherData.main.humidity}% | 바람 ${weatherData.wind.deg}&deg; ${weatherData.wind.speed}m/s | 1시간강수량 -mm</p>
          <p class="sunrise-sunset">일출 ${new Date(weatherData.sys.sunrise * 1000).getHours()}:${new Date(weatherData.sys.sunrise * 1000).getMinutes()} | 일몰 ${new Date(weatherData.sys.sunset * 1000).getHours()}:${new Date(weatherData.sys.sunset * 1000).getMinutes()}</p>
        `
        weatherContents.innerHTML = contents;

      } catch(error) {

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
          let tableData = `<tr><td>${keyword}</td>`;
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

      }})

  },[keyword])


  return (
    <div className="container">
        <div className='search-container'>
            <input id="input-area" type="text" placeholder='지역명을 영문으로 입력하세요. (ex. Seoul)' />
            <button><i className="fa fa-search" aria-hidden="true"></i></button>
        </div>
        <div className="weather-contents">
            <h2 className='area-name'>서울</h2>
            <h3 className="weather-now"><img className="weatherImg" src="./images/weather/01d.png" alt='이모티콘'/></h3>
            <p className="temp-now"><span className="main-temp">3.5&#8451;</span> 체감(3.0&#8451;)</p>
            <p className="temp-low-high">최저 <span className="temp-low">2.0&#8451;</span> | 최고 <span className="temp-high">4.5&#8451;</span></p>
            <p className="weather-info">습도 50% | 바람 남동 0.5m/s | 1시간강수량 -mm</p>
            <p className="sunrise-sunset">일출 07:00 | 일몰 17:00</p>
        </div>
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