import React from "react";
import "./Header.css";
import moment from "../momentRange";

function Header(props) {
  return (
    <header>
      <button onClick={props.prevMonth} className="prev">
        &lt;
      </button>
      <h1 className="month-header">
        {moment(props.currentMonth, "YYYYMM").format("MMMM, YYYY")}
      </h1>
      <button onClick={props.nextMonth} className="next">
        &gt;
      </button>
    </header>
  );
}

export default Header;
