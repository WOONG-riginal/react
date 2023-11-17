import React, { useState } from 'react';
import axios from 'axios';

function Forecast () {

    let [forecast, setForecast] = useState([]);

    // AXIOS
    function getForecast($areaName) {
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${$areaName}&units=metric&appid=81f458812bf2ce501b166301fae5f46a`)
        .then((response) => {
            // console.log(response.data.list)
            setForecast([...response.data.list])
        })
        .catch((error) => {
          console.log(error);
        }) 
    }
    getForecast('Seoul');

    function rendering() {
          const result = [];
          let temp_date = '';
          for (let idx=0; idx < 21; idx++) {
              if (temp_date !== forecast[idx].dt_txt.substr(0,10)) {
                result.push(
                    <th>
                      {forecast[idx].dt_txt.substr(8,2)}일
                    </th>
                );
                temp_date = forecast[idx].dt_txt.substr(0,10);
              } else {
                result.push(
                    <th></th>
                );
              }
          }
        return result;
    }

    return (
      <div className='container'>
      <h2 className='forecast-title'>전국 기상예보</h2>
      <table className='forecast-contents'>
        <thead>
          <tr className='date'>
            <th className='area-name' rowSpan={'2'}>지역</th>
            { rendering() }
          </tr>
        </thead>
        <tbody>
          <tr>
            <th></th>
          </tr>
        </tbody>
      </table>
    </div>
    );
}
export default Forecast;