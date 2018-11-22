import React from "react";
import "./Form.css";

function Form(props) {
  return (
    <div className="add-edit-event" onClick={props.addOrEditEvent}>
      <button type="submit">Add&nbsp;an&nbsp;Event</button>
    </div>
  );
}

export default Form;
