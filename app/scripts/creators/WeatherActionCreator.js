/**
 * Weather actions
 *
 * @exports WeatherActionCreator singleton
 */

import AbstractActionCreator from '../creators/AbstractActionCreator';

const baseApi = 'http://api.openweathermap.org/data/2.5/forecast/daily?cnt=7&units=metric&appid=44db6a862fba0b067b1930da0d769e98';

class WeatherActionCreator extends AbstractActionCreator {
  /**
   * Load Weather
   */
  loadWeather(name, coords) {

    this.dispatch('weather:loadStart');
    let url = '';
    if (name) {
      url = `${baseApi}&q=${name}`;
    } else if (coords) {
      url = `${baseApi}&lat=${coords.latitude}&lon=${coords.longitude}`;
    };

    if (url) {
      fetch(url, {
        headers: new Headers({
          'Content-Type': 'text/plain'
        })
      }).then(
        (response) => {
          response.json().then((data) => {  
            this.dispatch('weather:loadSuccess', data);
          }); 
        },
        (err) => {

        }
      )
    }
  }
}

const instance = new WeatherActionCreator();

export default instance;
