import React, { useState } from 'react';
import moment from 'moment'
import Cookies from 'universal-cookie';
import logo from './logo.svg';
import './App.css';
import Calendar from './Calendar'
import Input from './Input'
import Joke from './Joke'

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

const Quarantine = ({}) => {

}

function App() {
  const cookies = new Cookies();
  const [state, handleChange] = useFormState({ cookies })
  const condition = state["days"] != undefined && state["days"] != "undefined"

  return (
    <div className="App">
      { condition ?
        (<Calendar days={state["days"]} onChange={handleChange} />) :
        (<div>
          <Input onChange={handleChange} days={state["days"]} />
          <Joke cookies={cookies}/>
        </div>)
      }
    </div>
  );
}

export default App;
