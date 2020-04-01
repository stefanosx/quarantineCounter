import React, { useState } from 'react';
import moment from 'moment'
import Cookies from 'universal-cookie';
import logo from './logo.svg';
import './App.css';
import Calendar from './Calendar'
import Input from './Input'
import ReactPlayer from 'react-player'


const useFormState = ({ cookies }) => {
  const days = cookies.get('Days') || undefined
  const now = moment(new Date());
  const [state, setState] = useState({ days: days})

  const handleChange = (value) => {
    const days = moment.duration(now.diff(moment(value))).asDays()
    let intDays = parseInt(days)
    console.log(intDays)
    if (intDays === 0) {
      intDays = undefined
    }
    setState({ days: intDays } )
    cookies.set("Days", intDays)
  }

  return [state, handleChange]
}

function App() {
  const cookies = new Cookies();
  const [state, handleChange] = useFormState({ cookies })
  const condition = state["days"] != undefined && state["days"] != "undefined"

  return (
    <div className="App">
      <ReactPlayer
        url='https://www.youtube.com/watch?v=ARt9HV9T0w8'
        playing
        loop
        width={0}
        height={0}
      />
      { condition ?
        (<Calendar days={state["days"]} onChange={handleChange} cookies={cookies}/>) :
        ( <Input onChange={handleChange} days={state["days"]} /> )
      }
    </div>
  );
}

export default App;
