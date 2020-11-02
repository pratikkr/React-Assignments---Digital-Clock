import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString("en-us", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
      })
    };
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString("en-us", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
      })
    });
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnMount() {
    clearInterval(this.intervalID);
  }
  render() {
    return (
      <div className="App">
        <div className="clock">
          <h3 id="time">{`${this.state.time}`}</h3>
        </div>
      </div>
    );
  }
}

export default App;
