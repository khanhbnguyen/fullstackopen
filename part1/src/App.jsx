const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old!</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  const friends = [
    {name: 'Cain', age: '105'},
    {name: 'Abel', age: '106'}
  ]
  return (
    <>
      <h1>Greetings!</h1>
      <Hello name='Maya' age={26 + 10}/>
      <Hello name={name} age={age}/>
      <p>Hello {friends[0].name}! You are {friends[0].age} years old.</p>
      <p>Hello {friends[1].name}! You are {friends[1].age} years old.</p>
    </>
  )
}

export default App