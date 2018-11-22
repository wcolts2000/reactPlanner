import React, { Fragment } from "react";
import PropTypes from "prop-types";
// import moment from "../momentRange";
import "./Day.css";
import Card from "./Card";
import Form from "./Form";

const Day = props => {
  return (
    <div className="weekday-row">
      <div className="weekday">
        <p>{props.date.format("ddd, DD").split(", ")[0]}</p>
        <p>{props.date.format("ddd, DD").split(", ")[1]}</p>
      </div>
      <div className="event-row">
        <Card
          events={props.events}
          addOrEditEvent={props.addOrEditEvent}
          deleteEvent={props.deleteEvent}
        />
        <Form
          handleInputChange={props.handleInputChange}
          addOrEditEvent={props.addOrEditEvent}
        />
      </div>
    </div>
  );
};

Day.propTypes = {
  date: PropTypes.object.isRequired,
  events: PropTypes.objectOf(PropTypes.object.isRequired)
};

export default Day;
