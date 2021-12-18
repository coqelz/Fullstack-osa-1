import React, { useState } from 'react'


const Button = ({handleClick, text}) => (
<button onClick={handleClick} >
    {text}
  </button>
)


const Statistics = (props) => {

 if(props.AllClicks === 0) return(
  <div> No feedback given </div>
  )
  return(
    <div>
 <StatisticLine text="good" value={props.good} />
 <StatisticLine text="neutral" value ={props.neutral} />
 <StatisticLine text="bad" value ={props.bad} />
 <StatisticLine text="all" value={props.AllClicks} />
 <StatisticLine text="average" value={props.average / props.AllClicks} />
 <StatisticLine text="positive" value={props.good / props.AllClicks * 100}  />
</div>
  )
}

const StatisticLine = ({text, value}) => (
 <div>
   {text} {value} 
 </div>
)

  

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [AllClicks, setAllClicks] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAllClicks(AllClicks + 1)
    setAverage(average + 1)
    }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAllClicks(AllClicks + 1)
    setAverage(average + 0)
    }
      
  const handleBadClick = () => {
      setBad(bad + 1)
      setAllClicks(AllClicks + 1)
      setAverage(average - 1)
    }

    

  return (
    <div>
     <h1> give feedback </h1>
     <Button handleClick={handleGoodClick} text="good" />
     <Button handleClick={handleNeutralClick} text="neutral" />
     <Button handleClick={handleBadClick} text="bad" />
     <h1> statistics </h1>
    <Statistics good={good} bad={bad} neutral={neutral} average={average} AllClicks={AllClicks} />
    </div>
  )
}

export default App
