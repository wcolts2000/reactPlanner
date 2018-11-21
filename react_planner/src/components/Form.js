import React from "react";

function Form(props) {
  return (
    <form onSubmit={props.addOrEditEvent}>
      <input
        type="text"
        className="add-edit-event"
        value={props.eventInput}
        placeholder="Add/Edit Event..."
        onChange={props.handleInputChange}
      />
      <button
        type="submit"
        value={props.addEvent}
        onClick={props.addOrEditEvent}
      />
    </form>
  );
}

export default Form;
