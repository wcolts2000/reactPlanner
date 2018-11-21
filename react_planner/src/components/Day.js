import React, { Fragment } from "react";
import PropTypes from "prop-types";
// import moment from "../momentRange";
import "./Day.css";
import Card from "./Card";

const Day = props => {
  return (
    <div className="weekday-row">
      <div className="weekday">
        <p>{props.date.format("ddd, DD").split(", ")[0]}</p>
        <p>{props.date.format("ddd, DD").split(", ")[1]}</p>
      </div>
      <Card
        events={props.events}
        addOrEditEvent={props.addOrEditEvent}
        deleteEvent={props.deleteEvent}
      />
    </div>
  );
};

Day.propTypes = {
  date: PropTypes.object.isRequired,
  events: PropTypes.objectOf(PropTypes.object.isRequired)
};

export default Day;
