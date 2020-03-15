import React from "react";
import "./weather-styles.css";
import axios from "axios";
import Day from "../day/Day-component";
import response from "../../sample";
import { withRouter } from "react-router-dom";
class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      list: []
      // isLoading: true
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
    this.setState(
      {
        list,
        isLoading: false
      },
      () => {
        console.log(this.state);
        console.log(this.props.match);
      }
    );
  }
  render() {
    return (
      <div className="day">
        {this.state.list.map(day => {
          const id = this.state.list.indexOf(day);
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
export default withRouter(Weather);
