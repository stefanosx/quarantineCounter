import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Joke from './Joke'

import './App.css';

const Calendar = ({ days, cookies }) =>{

  return (
    <div>
      <div className="calendar">
        <div className="header">Days in Quarantine</div>
        <span>{ days }</span>
      </div>
      <Joke cookies={cookies}/>
    </div>
  );
}

export default Calendar;
