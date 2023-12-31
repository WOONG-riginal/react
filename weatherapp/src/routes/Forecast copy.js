import React, { useEffect } from 'react'
import './forecast.css'
// import { weatherIcon } from '../DataList'

function Forecast() {
  useEffect(() => {

    function setForecastTime($areaName) {
      const init = {
          method: "GET",
      };
  
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${$areaName}&units=metric&appid=f47b7f358e7e20494119bb7bcc6b2455`, init)
      .then(async response => {
          try {
            const forecastData = await response.json();
            console.log(forecastData);
            
            let temp_date = '';
            let tableData = '';
            for(let i=0; i<=20; i++){
              if (temp_date !== forecastData.list[i].dt_txt.substr(0,10)) {
              
                temp_date = forecastData.list[i].dt_txt.substr(0,10);
  
                tableData = `<th>${forecastData.list[i].dt_txt.substr(0,10)}</th>`;
                // return tableData;
                console.log(tableData);
              } else {
                
                tableData = `<th></th>`;
                // return tableData;
                console.log(tableData);
              }
            }
            return tableData;
            
          } catch(error) {
            
          }
      })
    }
    setForecastTime('Seoul');

  }, [])


  return (
    <div className='container'>
      <h2 className='forecast-title'>전국 기상예보</h2>
      <table className='forecast-contents'>
        <thead>
          <tr className='date'>
            <th className='area-name' rowSpan={'2'}>지역</th>
            <th>오늘</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>내일</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>모레</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr className='time'>
            <th>00:00</th>
            <th>03:00</th>
            <th>06:00</th>
            <th>09:00</th>
            <th>12:00</th>
            <th>15:00</th>
            <th>18:00</th>
            <th>21:00</th>
            <th>00:00</th>
            <th>03:00</th>
            <th>06:00</th>
            <th>09:00</th>
            <th>12:00</th>
            <th>15:00</th>
            <th>18:00</th>
            <th>21:00</th>
            <th>00:00</th>
            <th>03:00</th>
            <th>06:00</th>
            <th>09:00</th>
            <th>12:00</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>서울<br/>인천<br/>경기</td>
            {(() => {
              const arr = [];
              for(var i=0; i<21; i++){
                arr.push(<td><img className="weatherImg" src="./images/weather/01d.png" alt='이모티콘'/><br/>3.5&#8451;</td>)
              }
              return arr;
            })()}
          </tr>
          <tr>
            <td>강원<br/>영서</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>강원<br/>영동</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>대전<br/>세종<br/>충남</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>충북</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>광주<br/>전남</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>전북</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>부산<br/>울산<br/>경남</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>대구<br/>경북</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>제주</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>0</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Forecast