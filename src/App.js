import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/header/header-component";
import Homepage from "./Pages/homepage/homepage-component";
import Forecast from "./Pages/Forecast/forecast-component";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/forecast/:day" component={Forecast} />
      </Switch>
    </div>
  );
}

export default App;
