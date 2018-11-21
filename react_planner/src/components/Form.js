import React from "react";
import "./Form.css";

function Form(props) {
  return (
    <form onSubmit={props.addOrEditEvent}>
      {/* <input
        type="text"
        className="add-edit-event"
        value={props.eventInput}
        placeholder="Add an Event..."
        onChange={props.handleInputChange}
      /> */}
      <button
        className="add-edit-event"
        type="submit"
        onClick={props.addOrEditEvent}
      >
        Add&nbsp;an&nbsp;Event
      </button>
    </form>
  );
}

export default Form;
