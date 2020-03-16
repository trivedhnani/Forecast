import React from "react";
import "./weather-styles.css";
import axios from "axios";
import Day from "../day/Day-component";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setWeather } from "../../redux/weather/weather-action";
import Information from "../Information/info-component";
class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      isLoading: true
    };
  }
  async componentDidMount() {
    try {
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast?q=Boston&appid=3b612f18b77b5f926dac44b347a2c33c"
      );
      console.log(res);
      const { setWeather } = this.props;
      let list = res.data.list;
      list = list.reduce((acc, cur) => {
        const length = acc.length;
        const curDate = cur["dt_txt"].split(" ")[0];
        let curArray = [];
        if (length !== 0) {
          curArray = acc[length - 1];
        }
        if (
          length === 0 ||
          curArray[acc[length - 1].length - 1]["dt_txt"].split(" ")[0] !==
            curDate
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
    } catch (err) {
      console.log("Couldn't fetch data!!" + err);
    }
  }
  render() {
    const { weatherList } = this.props;
    console.log(this.props);
    return (
      <div className="day">
        {weatherList.map(day => {
          const id = weatherList.indexOf(day) + 1;
          return (
            <Day
              key={id}
              onClick={() => this.props.history.push(`/forecast/${id}`)}
              img={`http://openweathermap.org/img/wn/${day[0]["weather"][0]["icon"]}@2x.png`}
            >
              <p>{day[0]["dt_txt"].split(" ")[0]}</p>
              <Information info={day[0]} />
            </Day>
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
