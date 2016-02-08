import React from 'react';
// Components

import AbstractComponent from '../components/AbstractComponent.jsx';
import Block from '../components/Block.jsx';
import SuggestCity from '../components/SuggestCity.jsx';
import Loading from '../components/Loading.jsx';
// Store & Action
import CitySuggestStore from '../stores/CitySuggestStore';
import CitySuggestActionCreator from '../creators/CitySuggestActionCreator';
import WeatherActionCreator from '../creators/WeatherActionCreator';

class CitySuggest extends AbstractComponent {
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
      loading: false
    };
  }

  /**
   * @inheritdoc
   */
  getStoresConfig() {
    return [
      {
        store: CitySuggestStore,
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
      list: CitySuggestStore.get('list'),
      loading: CitySuggestStore.get('loading'),
    });
  }

  handlerChange(event) {
  	if (event.target.value != '') {
  		CitySuggestActionCreator.load(event.target.value);
  	} else {
  		CitySuggestActionCreator.clear();
  	}
  }
  /**
   * @inheritdoc
   */
  componentDidMount() {
    super.componentDidMount(); 
  }

  /**
   * @inheritdoc
   */
  render() {
    return (
      <Block>
      	<input onChange={this.handlerChange.bind(this)} className="input c_gray" placeholder="Введите название города"/>
      	<Loading loading={this.state.loading}>
      		<SuggestCity list={this.state.list}/>
      	</Loading>
      </Block>
    );
  }
}

export default CitySuggest;
