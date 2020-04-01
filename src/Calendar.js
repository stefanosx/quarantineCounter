import React from "react";
import ReactPlayer from "react-player";
import Joke from "./Joke";
import "./App.css";

const Calendar = ({ days }) => {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ARt9HV9T0w8"
        playing
        loop
        width={0}
        height={0}
      />
      <div className="calendar">
        <div className="header">Days in Quarantine</div>
        <span>{days}</span>
      </div>
      <Joke />
    </div>
  );
};

export default Calendar;
