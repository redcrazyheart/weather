/**
 * CitySuggestActionCreator actions
 *
 * @exports CitySuggestActionCreator singleton
 */

import AbstractActionCreator from '../creators/AbstractActionCreator';

class CitySuggestActionCreator extends AbstractActionCreator {
  /**
   * Load Weather
   */
  load(name) {

    this.dispatch('city:loadStart');
    let url = 'http://api.geonames.org/searchJSON?formatted=true&q='+name+'&maxRows=10&lang=en&username=redcrazyheart';
    fetch(url, {
      headers: new Headers({
        'Content-Type': 'text/plain'
      })
    }).then(
      (response) => {
        response.json().then((geo) => {  
          this.dispatch('city:loadSuccess', geo.geonames);
        }); 
      },
      (err) => {

      }
    )
  }

  clear() {
  	this.dispatch('city:loadSuccess', []);
  }
}

const instance = new CitySuggestActionCreator();

export default instance;