import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import './App.css';

const Calendar = ({ days, onChange }) =>{
  const handleChange = (event, value) => {
    onChange(undefined)
  }

  return (
    <div>
      <div className="calendar">
        <div className="header">Days in Quarantine</div>
        <span>{ days }</span>
      </div>
      <div>
        <IconButton aria-label="delete">
          <DeleteIcon onClick={handleChange}/>
        </IconButton>
      </div>
    </div>
  );
}

export default Calendar;
