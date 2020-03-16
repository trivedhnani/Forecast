import React from "react";
import "./weather-styles.css";
import axios from "axios";
import Day from "../day/Day-component";
import response from "../../sample";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setWeather } from "../../redux/weather/weather-action";
class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      isLoading: true
    };
  }
  async componentDidMount() {
    // try {
    //   const res = await axios.get(
    //     "https://api.openweathermap.org/data/2.5/forecast?q=Boston&appid=3b612f18b77b5f926dac44b347a2c33c"
    //   );
    //   console.log(res);
    // } catch (err) {
    //   console.log("Couldn't fetch data!!");
    // }
    const { setWeather } = this.props;
    let list = response.list;
    list = list.reduce((acc, cur) => {
      const length = acc.length;
      const curDate = cur["dt_txt"].split(" ")[0];
      let curArray = [];
      if (length !== 0) {
        curArray = acc[length - 1];
      }
      if (
        length === 0 ||
        curArray[acc[length - 1].length - 1]["dt_txt"].split(" ")[0] !== curDate
      ) {
        const newArray = [];
        newArray.push(cur);
        acc.push(newArray);
      } else {
        curArray.push(cur);
      }
      return acc;
    }, []);
    setWeather(list);
    this.setState({
      isLoading: false
    });
  }
  render() {
    const { weatherList } = this.props;
    console.log(this.props);
    return (
      <div className="day">
        {weatherList.map(day => {
          const id = weatherList.indexOf(day);
          return (
            <Day
              key={id}
              onClick={() => this.props.history.push(`/forecast/${id}`)}
            ></Day>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  weatherList: state.weather.list
});
const mapDispatchToProps = dispatch => ({
  setWeather: weather => dispatch(setWeather(weather))
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Weather)
);
