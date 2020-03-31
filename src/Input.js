import React from 'react';
import TextField from '@material-ui/core/TextField';
import './App.css';

const Input = ({ days, onChange }) => {
  const handleChange = (value) => {
    onChange(value)
  }

  return (
    <div className="input">
      <h4> When you started your Quarantine </h4>
      <TextField
        id="standard-number"
        type="date"
        variant="outlined"
        onChange={e => handleChange(e.target.value)}
      />
    </div>
  );
}

export default Input;
