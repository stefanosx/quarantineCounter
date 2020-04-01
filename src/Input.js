import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "./App.css";

const Input = ({ days, onChange }) => {
  const handleChange = (value) => {
    onChange(value);
  };

  return (
    <div className="input">
      <h4> When you started your Quarantine </h4>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="outlined"
          format="MM/dd/yyyy"
          margin="normal"
          id="standard-number"
          onChange={handleChange}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default Input;
