import React, { Component } from "react";

class App extends Component {
  state = {
    days: {
      "20181117": {
        event1: {
          title: "Study React",
          time: "8:00",
          description: "Learn about state and props"
        },
        event2: {
          title: "Learn Redux",
          time: "9:00",
          description: "Learn about reducers, action creators and more."
        }
      },
      "20190116": {
        event1: {
          title: "Plan a birthday party for Lidia",
          time: "0:00",
          description: "Keep it a secret. dont reveal the plan"
        }
      }
    }
  };

  addOrEditEvent = (e, date, key) => {
    if (!key) key = Date.now();

    this.setState(prevState => ({
      days: {
        ...prevState.days,
        [date]: {
          ...prevState.days[date],
          [key]: e
        }
      }
    }));
  };

  deleteEvent = (date, key) => {
    let copy = { ...this.state.days[date] };
    delete copy[key];

    this.setState(prevState => ({
      days: {
        ...prevState.days,
        [date]: copy
      }
    }));
  };

  render() {
    console.log(this.state);

    return <div className="App">Planner ...</div>;
  }
}

export default App;
