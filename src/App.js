import React, { useState } from "react";
import moment from "moment";
import Calendar from "./Calendar";
import Input from "./Input";
import "./App.css";
import { cookies } from "./utils/cookies";

const useFormState = () => {
  const days = cookies.get("Days");

  const [state, setState] = useState({ days: days });

  const handleChange = (value) => {
    const days = moment().diff(moment(value), "days");
    setState({ days: days });
    cookies.set("Days", days);
  };

  return [state, handleChange];
};

function App() {
  const [{ days }, handleChange] = useFormState();

  const hasDays = days != null;

  return (
    <div className="App">
      {hasDays ? (
        <Calendar days={days} onChange={handleChange} />
      ) : (
        <Input onChange={handleChange} days={days} />
      )}
    </div>
  );
}

export default App;
