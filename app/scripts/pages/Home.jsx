import React from 'react';
// Components
import Loading from '../components/Loading.jsx';
import Block from '../components/Block.jsx';

import AbstractComponent from '../components/AbstractComponent.jsx';
import City from '../components/City.jsx';
import WeatherList from '../components/WeatherList.jsx';
// Store & Action
import WeatherStore from '../stores/WeatherStore';
import WeatherActionCreator from '../creators/WeatherActionCreator';

class Home extends AbstractComponent {
  /**
   * @inheritdoc
   */
  constructor(props){
    super(props);

    this.state = {
      /**
      * List
      */
      list : [],
      /**
      * City
      */
      city : [],
      /**
      * Loading state
      */
      loading: false
    };
  }

  /**
   * @inheritdoc
   */
  getStoresConfig() {
    return [
      {
        store: WeatherStore,
        eventName: 'change',
        callback: this.storeChangeHandler.bind(this),
      },
    ];
  }

  /**
   * List store change handler
   */
  storeChangeHandler() {
    this.setState({
      list: WeatherStore.get(['data', 'list']),
      city: WeatherStore.get(['data', 'city']),
      loading: WeatherStore.get('loading'),
    });
  }

  /**
   * @inheritdoc
   */
  componentDidMount() {
    super.componentDidMount();

    let cityName = this.props.location.query.city;
    if (cityName) {
      WeatherActionCreator.loadWeather(cityName);
    } else if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(data) {
        WeatherActionCreator.loadWeather(null, data.coords);
      });
    } else {
      WeatherActionCreator.loadWeather();
    }
    
  }

  /**
   * @inheritdoc
   */
  render() {
    return (
      <Block>
        <Loading loading={this.state.loading}>
          <City {...this.state.city}/>
          <WeatherList list={this.state.list}/>
        </Loading>
      </Block>
    );
  }
}

export default Home;
