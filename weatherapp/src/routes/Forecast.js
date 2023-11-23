import React, { useEffect } from 'react'
import './forecast.css'
import { weatherIcon, areaList } from '../DataList'

function Forecast() {

  useEffect(() => {
    const init = {
      method : "GET",
    }

    const dateTable = document.querySelector('.date');
    const timeTable = document.querySelector('.time');

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Seoul&units=metric&appid=f47b7f358e7e20494119bb7bcc6b2455`, init)
    .then(async result => {
      try {
        const forecastData = await result.json();
        // console.log(forecastData);

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

        dateTable.innerHTML = setDateTable();
        timeTable.innerHTML = setTimeTable();

      } catch(error) {

      }});
  }, [])

  useEffect(() => {
    const init = {
      method : "GET",
    }

    const areaTable = document.querySelectorAll('tbody>tr');

    for(let k=0; k<areaList.length; k++){
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${areaList[k].name}&units=metric&appid=f47b7f358e7e20494119bb7bcc6b2455`, init)
      .then(async result => {
        try {
          const forecastData = await result.json();
          
          function setAreaTable(){
            let tableData = `<tr><td>${areaList[k].area}</td>`;
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
          areaTable[k].innerHTML = setAreaTable();
          
        } catch(error) {
          
        }}
      )
    }
  }, [])

  return (
    <div className='container'>
      <h2 className='forecast-title'>전국 기상예보</h2>
      <table className='forecast-contents'>
        <thead>
          <tr className='date'></tr>
          <tr className='time'></tr>
        </thead>
        <tbody className='area-forecast'>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
        </tbody>
      </table>
    </div>
  )
}

export default Forecast