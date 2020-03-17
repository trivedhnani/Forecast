import React from "react";
import "./weather-styles.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setWeather } from "../../redux/weather/weather-action";
import Search from "../search/search-component";
import { setSearch } from "../../redux/search/search-action";
import CustomButton from "../customButton/custom-button.component";
import DayList from "../daylist/DayList.component";
import EmptyPage from "../EmptyPage/EmptyPage.component";
class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      isLoading: true
    };
    this.searchRef = React.createRef();
  }
  async componentDidMount() {
    const { search } = this.props;
    try {
      // TODO-- Add a search box for cities
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=3b612f18b77b5f926dac44b347a2c33c&units=imperial`
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
  handelClick = async event => {
    const { setSearch } = this.props;
    setSearch(document.getElementById("searchField").value);
    this.componentDidMount();
  };
  render() {
    const { weatherList } = this.props;
    // console.log(this.props);
    return (
      <div className="day">
        <Search
          id="searchField"
          className="input"
          defaultValue={this.props.search}
        ></Search>
        <CustomButton className="input" id="button" onClick={this.handelClick}>
          Search
        </CustomButton>
        <div className="weatherList">
          {weatherList.length > 0 ? (
            <DayList weatherList={weatherList} />
          ) : (
            <EmptyPage />
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  weatherList: state.weather.list,
  search: state.search.search
});
const mapDispatchToProps = dispatch => ({
  setWeather: weather => dispatch(setWeather(weather)),
  setSearch: search => dispatch(setSearch(search))
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Weather)
);
