import React, { Component } from "react";
import moment from "./momentRange";
import Day from "./components/Day";
import "./App.css";
import Modal from "./components/Modal";
import Header from "./components/Header";

// ONLY FOR DEBUGGING
// window.moment = moment;

class App extends Component {
  state = {
    days: {
      "20181117": {
        event1: {
          title: "Study React ",
          time: "8:00",
          description: "Learn about state and props"
        },
        event2: {
          title: "Learn Redux",
          time: "9:00",
          description: "Learn about reducers, action creators and more."
        },
        event3: {
          title: "try gatsby",
          time: "11:00",
          description: "Make a markdown schema and blog page."
        },
        event4: {
          title: "Learn redact router",
          time: "5:00",
          description: "Get the instagram clone routing individual cards."
        }
      },
      "20190116": {
        event1: {
          title: "Plan a birthday party for Lidiia",
          time: "0:00",
          description: "Keep it a secret. dont reveal the plan"
        }
      }
    },
    currentMonth: "201811",
    modal: false
  };

  // componentDidUpdate(prevState) {
  //   if(prevState.modal !== this.state.modal) {

  //   }
  // }

  addOrEditEvent = (event, date, key) => {
    if (!key) key = Date.now();

    this.setState(prevState => ({
      days: {
        ...prevState.days,
        [date]: {
          ...prevState.days[date],
          [key]: event
        }
      },
      modal: !prevState.modal
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

  nextMonth = () => {
    this.setState(prevState => ({
      currentMonth: moment(prevState.currentMonth, "YYYYMM")
        .add(1, "months")
        .format("YYYYMM")
    }));
  };

  prevMonth = () => {
    this.setState(prevState => ({
      currentMonth: moment(prevState.currentMonth, "YYYYMM")
        .subtract(1, "months")
        .format("YYYYMM")
    }));
  };

  render() {
    let dates = Array.from(
      moment(this.state.currentMonth, "YYYYMM")
        .range("month")
        .by("days")
    );
    return (
      <div className="App">
        <Header
          currentMonth={this.state.currentMonth}
          nextMonth={this.nextMonth}
          prevMonth={this.prevMonth}
          addOrEditEvent={this.addOrEditEvent}
        />
        <div className="days-rows-container">
          {dates.map(date => (
            <Day
              key={date.format("YYYYMMDD")}
              date={date}
              events={this.state.days[date.format("YYYYMMDD")]}
              addOrEditEvent={this.addOrEditEvent}
              deleteEvent={this.deleteEvent}
            />
          ))}
        </div>
        {this.state.modal ? (
          <Modal
            handleInputChange={this.handleInputChange}
            addOrEditEvent={this.addOrEditEvent}
            modal={this.state.modal}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
