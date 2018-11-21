import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="event-card-row">
      {props.events &&
        Object.keys(props.events).map(key => {
          return (
            <div className="event-card">
              <h2>{props.events[key].title}</h2>
              <p className="time-label">{props.events[key].time}</p>
              <p className="event-description">
                {props.events[key].description}
              </p>
              <div>
                <button
                  className="fas fa-edit"
                  value=""
                  onClick={props.addOrEditEvent}
                />
                <button
                  className="far fa-trash-alt"
                  value=""
                  onClick={props.deleteEvent}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Card;
