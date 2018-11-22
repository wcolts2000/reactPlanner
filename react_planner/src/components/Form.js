import React from "react";
import "./Form.css";

function Form(props) {
  return (
    <div className="add-edit-event">
      <button type="submit" onClick={props.addOrEditEvent}>
        Add&nbsp;an&nbsp;Event
      </button>
    </div>
  );
}

export default Form;
