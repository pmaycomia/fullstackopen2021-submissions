import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const HasVotes = ({arrayVotes}) => {
  
  return (
    <p><em>has {arrayVotes}  vote/s</em></p>
  )
}

const BestAnecdote = (props) => {
  if (props.topVote === 0) {
    return(
      <p>vote for the best anecdote</p>
    )
  }
  return (
    <div>
        <h2>Anecdote with most vote</h2>
        <div>
          <p>{props.arrayAnecdote}</p>                 
          <p><em>has {props.arrayVotes} vote/s</em></p>
          
        </div>
      </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState ([0, 0, 0, 0, 0, 0])

  let randomNum

  const handleClickNext = () => {   
    randomNum = () => Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNum)
    console.log(topAnecdote)       
  }
  
  
  const copy = [...vote]

  const handleClickVote = () => {    
    copy[selected] += 1
    setVote(copy)
    console.log(vote)       
  }

  //the biggest number in the array
  let topAnecdote = vote.indexOf(Math.max(...vote))
  

  

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <HasVotes arrayVotes={vote[selected]} />
      
      <hr />
      <Button handleClick={handleClickVote} text='vote' />
      <span> </span>
      <Button handleClick={handleClickNext} text='next anecdote' />
            
      <BestAnecdote topVote={Math.max(...vote)}  arrayAnecdote={anecdotes[topAnecdote]} arrayVotes={vote[topAnecdote]} />
      

    </div>
    
  )
}

export default App