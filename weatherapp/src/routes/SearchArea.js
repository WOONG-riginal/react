import React from 'react'
import './searchArea.css'

function SearchArea() {
  return (
    <div className="container">
        <div className='search-container'>
            <input type="text" placeholder='지역명을 영문으로 입력하세요. (ex. Seoul)' />
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
              <tr className='date'>
                <th className='area-name' rowSpan='2'>지역</th>
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
              <tr classNameName='time'>
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
                <td>도시이름</td>
                <td><img className="weatherImg" src="./images/weather/01d.png" alt='이모티콘'/><br/>3.5&#8451;</td>
                <td><img className="weatherImg" src="./images/weather/01d.png" alt='이모티콘'/><br/>3.5&#8451;</td>
                <td><img className="weatherImg" src="./images/weather/01d.png" alt='이모티콘'/><br/>3.5&#8451;</td>
                <td><img className="weatherImg" src="./images/weather/01d.png" alt='이모티콘'/><br/>3.5&#8451;</td>
                <td><img className="weatherImg" src="./images/weather/01d.png" alt='이모티콘'/><br/>3.5&#8451;</td>
                <td><img className="weatherImg" src="./images/weather/01d.png" alt='이모티콘'/><br/>3.5&#8451;</td>
                <td><img className="weatherImg" src="./images/weather/01d.png" alt='이모티콘'/><br/>3.5&#8451;</td>
                <td><img className="weatherImg" src="./images/weather/01d.png" alt='이모티콘'/><br/>3.5&#8451;</td>
                <td><img className="weatherImg" src="./images/weather/01d.png" alt='이모티콘'/><br/>3.5&#8451;</td>
                <td><img className="weatherImg" src="./images/weather/01d.png" alt='이모티콘'/><br/>3.5&#8451;</td>
                <td><img className="weatherImg" src="./images/weather/01d.png" alt='이모티콘'/><br/>3.5&#8451;</td>
                <td><img className="weatherImg" src="./images/weather/01d.png" alt='이모티콘'/><br/>3.5&#8451;</td>
                <td><img className="weatherImg" src="./images/weather/01d.png" alt='이모티콘'/><br/>3.5&#8451;</td>
                <td><img className="weatherImg" src="./images/weather/01d.png" alt='이모티콘'/><br/>3.5&#8451;</td>
                <td><img className="weatherImg" src="./images/weather/01d.png" alt='이모티콘'/><br/>3.5&#8451;</td>
                <td><img className="weatherImg" src="./images/weather/01d.png" alt='이모티콘'/><br/>3.5&#8451;</td>
                <td><img className="weatherImg" src="./images/weather/01d.png" alt='이모티콘'/><br/>3.5&#8451;</td>
                <td><img className="weatherImg" src="./images/weather/01d.png" alt='이모티콘'/><br/>3.5&#8451;</td>
                <td><img className="weatherImg" src="./images/weather/01d.png" alt='이모티콘'/><br/>3.5&#8451;</td>
                <td><img className="weatherImg" src="./images/weather/01d.png" alt='이모티콘'/><br/>3.5&#8451;</td>
                <td><img className="weatherImg" src="./images/weather/01d.png" alt='이모티콘'/><br/>3.5&#8451;</td>
              </tr>
            </tbody>
        </table>
    </div>
  )
}

export default SearchArea