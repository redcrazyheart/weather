import React from 'react';
import Weather from '../components/Weather.jsx';
import AbstractComponent from '../components/AbstractComponent.jsx';
import WeatherListItem from './WeatherListItem.jsx';

class WeatherList extends AbstractComponent {
  /**
   * @inheritdoc
   */
  constructor(props){
    super(props);

    this.state = {
      active : {},
    };
  }

  componentDidMount(nextProps) {
    this.setState({
      active: this.props.list[0]
    })
  }

  handlerClick(item) {
    this.setState({
      active : item
    })
  }

  render() {
    let list = this.props.list.map((item, index) => {
      let active = this.state.active.dt === item.dt ? 'active' : '';
      return (
        <WeatherListItem 
          key={item.dt} 
          item={item} 
          active={active} 
          handler={this.handlerClick.bind(this, item)}
        />
      );
    });

    return (
      <div className="h_desktop">
        <div className="h_desktop">
          <Weather {...this.state.active}/>
        </div>
        <hr className="c_gray hr"/>
        <div className="h_desktop">
          <div className="weather_list">
            {list}
          </div>
        </div>
      </div>
    );
  }
}


WeatherList.propTypes = {
  list : React.PropTypes.array
}

export default WeatherList;