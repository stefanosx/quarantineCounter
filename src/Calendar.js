import React from 'react';
import ReactPlayer from 'react-player'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Joke from './Joke'

import './App.css';

const Calendar = ({ days, cookies }) =>{

  return (
    <div>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=ARt9HV9T0w8'
        playing
        loop
        width={0}
        height={0}
      />
      <div className="calendar">
        <div className="header">Days in Quarantine</div>
        <span>{ days }</span>
      </div>
      <Joke cookies={cookies}/>
    </div>
  );
}

export default Calendar;
