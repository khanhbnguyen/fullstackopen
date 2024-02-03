import { useState } from 'react'

const getRandomInt = (maxNumber) => {
  return (
    Math.floor(Math.random() * maxNumber)
  )
}

const NextButton = ({setSelected}) => {
  return (
    <div>
      <button onClick={() => setSelected(getRandomInt(8))}>next anecdote</button>
    </div>
  )
}

const VoteButton = ({selected, votes, setVotes}) => {
  const copy = [...votes]
  copy[selected] += 1

  return (
    <div>
      <button onClick={() => setVotes(copy)}>vote</button>
    </div>
  )
}

const Display = ({header, anecdote, numVotes}) => {
  return (
    <div>
      <h1>{header}</h1>
      <p>{anecdote}</p>
      <p>has {numVotes} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))

  const maxVotes = Math.max(...votes)
  let maxIndex = 0

  for (let i = 0; i < 8; i++) {
    if (votes[i] == maxVotes) {
      maxIndex = i
      break
    }
  }

  return (
    <div>
      <Display header="Anecdote of the day" anecdote={anecdotes[selected]} numVotes={votes[selected]}/>
      <table>
        <tbody>
          <tr>
            <td><VoteButton selected={selected} votes={votes} setVotes={setVotes}/></td>
            <td><NextButton setSelected={setSelected}/></td>
          </tr>
        </tbody>
      </table>
      <Display header="Anecdote with the most votes" anecdote={anecdotes[maxIndex]} numVotes={votes[maxIndex]}/>
    </div>
  )

}

export default App