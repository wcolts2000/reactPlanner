import React from "react";
import "./Modal.css";

function Modal(props) {
  return (
    <form onSubmit={props.addOrEditEvent} className="event-modal">
      <div className="modal-box">
        <h2>Event</h2>
        <input
          type="text"
          name="title"
          value={props.value}
          placeholder="Event Title.."
          onChange={props.handleInputChange}
        />
        <input
          type="text"
          name="time"
          value={props.value}
          placeholder="Event Time..."
          onChange={props.handleInputChange}
        />
        <input
          type="text"
          name="description"
          value={props.value}
          placeholder="Event Description..."
          onChange={props.handleInputChange}
        />
        <button onClick={props.addOrEditEvent}>Submit</button>
      </div>
    </form>
  );
}

export default Modal;
