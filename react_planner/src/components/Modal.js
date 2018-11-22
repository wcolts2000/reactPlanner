import React from "react";
import "./Modal.css";

function Modal(props) {
  return (
    <form onSubmit={props.addOrEditEvent} className="event-modal">
      <div className="modal-box">
        <h2>{props.edit} Event</h2>
        <input
          type="text"
          name="title"
          value={props.value}
          placeholder="Add Event..."
        />
        <input
          type="text"
          name="time"
          value={props.value}
          placeholder="Add Time..."
        />
        <input
          type="text"
          name="description"
          value={props.value}
          placeholder="Add Description..."
        />
        <button onClick={props.addOrEditEvent}>Submit</button>
      </div>
    </form>
  );
}

export default Modal;
