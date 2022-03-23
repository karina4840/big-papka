import React from 'react';
import Chart from './Chart';

export default class Graph extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        temp: [],
        humidity: [],
        pressure: [],
        name: '',
        error: false
      }
    }

    renderGraph = () => {
        const { temp, pressure, humidity } = this.state;
        return (
          <tr key={temp}>
            <td><Chart data={temp} color="orange" units="K" /></td>
            <td><Chart data={pressure} color="blue" units="hPa" /></td>
            <td><Chart data={humidity} color="green" units="%" /></td>
          </tr>
        );
      }

      render() {
        const { temp, pressure, humidity, name } = this.state;
        return (
          <>
            {this.state.error ||
              <div>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th> Temperature(K) </th>
                      <th> Pressure(hPa) </th>
                      <th> Humidity(%) </th>
                    </tr>
                  </thead>
                  <tbody>{this.renderGraph()}</tbody>
                </table>
              </div>
            }
          </>
        );
      }

}



// function Graph({ temp, pressure, humidity, name }) {

    // renderGraph = () => {
    //     const { temp, pressure, humidity } = this.state;
    //     return (
    //       <tr key={temp}>
    //         <td><Chart data={temp} color="orange" units="K" /></td>
    //         <td><Chart data={pressure} color="blue" units="hPa" /></td>
    //         <td><Chart data={humidity} color="green" units="%" /></td>
    //       </tr>
    //     );
    //   }
//     return (
//       <div className="Weather">
  
//         <div className="Weather__info">
//           <img
//             className="Weather__icon"
//             src={"https://openweathermap.org/img/wn/" +
//               weatherInfo.current.weather[0].icon + ".png"}
//             alt={weatherInfo.current.weather[0].main}
//           />
//           <ul className="Weather__list">
//             <li className="list__temperature">
//               {Math.round(weatherInfo.current.temp)}
//               <span>°C</span>
//             </li>
//             <li> Humidity: {weatherInfo.current.humidity}% </li>
//             <li> Wind: {Math.round(weatherInfo.current.wind_speed * 3.6)} km/h </li>
//             <li> Pressure: {weatherInfo.current.pressure} mb</li>
//           </ul>
//         </div>
  
//         <div className="Weather__other-info">
//           <h2 className="other-info__city">
//             {location.city || location.town},{" "}
//             {location.state || location.country.toUpperCase()}
//           </h2>
//           <h3 className="other-info__day">{date}</h3>
//           <h3 className="other-info__description">
//             {weatherInfo.current.weather[0].description}
//           </h3>
//         </div>
//       </div>
//     );
//   }
  
//   export default Graph;