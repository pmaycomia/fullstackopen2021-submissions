import React, { useState } from 'react'

const SingleStat = (props) => {
  if (props.text === "positive") {
    return (
        <tr>
          <td>{props.text}</td>
          <td>{props.value} %</td>
        </tr>
    )
  }
  
  
  return (   
      
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
    
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )  
  }
  
  return (
    
      <div>
        <h2>statistics</h2>

        <table>
          <SingleStat text='good' value={props.good} />
          <SingleStat text='neutral' value={props.neutral} />
          <SingleStat text='bad' value={props.bad} />
          <SingleStat text='all' value={props.all} />
          <SingleStat text='average' value={props.averageScore} />
          <SingleStat text='positive' value={props.positivePercentage} />

               

        </table>
        
      </div>
  )
}


const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAllClicks] = useState(0)

  const handleClickGood = () => {         
      setGood(good + 1)   
      setAllClicks(allClicks + 1)   
      console.log(good)      
  }

  const handleClickNeutral = () => {         
    setNeutral(neutral + 1)
    setAllClicks(allClicks + 1)    
    console.log(neutral)      
  }

  const handleClickBad = () => {         
    setBad(bad + 1)    
    setAllClicks(allClicks + 1)  
    console.log(bad)      
  }

  const averageScore = (good - bad) / allClicks

  const positivePercentage = (good * 100) / allClicks
 

  

  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <Button handleClick={handleClickGood} text='good' />
        <Button handleClick={handleClickNeutral} text='neutral' />
        <Button handleClick={handleClickBad} text='bad' />
      </div>
      
      <Statistics good={good} neutral={neutral} bad={bad} all={allClicks} positivePercentage={positivePercentage} averageScore={averageScore} />

    </div>
  )
}

export default App