import { useState } from 'react'

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({text, value, setValue}) => {
  return (
    <div>
      <button onClick={() => setValue(value + 1)}>{text}</button>
    </div>
  )
}

const StatisticsLine = ({text, number}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{number}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if ((good == 0) && (neutral == 0) && (bad == 0)) {
    return (
      <div>
        <p>No feedback given.</p>
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text="good" number={good}/>
          <StatisticsLine text="neutral" number={neutral}/>
          <StatisticsLine text="bad" number={bad}/>
          <StatisticsLine text="all" number={good + neutral + bad}/>
          <StatisticsLine text="average" number={((good - bad) / (good + neutral + bad)).toFixed(2)}/>
          <StatisticsLine text="positive" number={(100 * (good) / (good + neutral + bad)).toFixed(1) + " %"}/>
        </tbody>
      </table>

    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback"/>
      <table>
        <tbody>
        <tr>
            <td><Button text={"good"} value={good} setValue={setGood}/></td>
            <td><Button text={"neutral"} value={neutral} setValue={setNeutral}/></td>
            <td><Button text={"bad"} value={bad} setValue={setBad}/></td>
          </tr>
        </tbody>
      </table>
      <Header text="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App