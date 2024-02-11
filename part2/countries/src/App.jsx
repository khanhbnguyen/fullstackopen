import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './index.css'

import Display from "./components/Display"
import Filter from "./components/Filter"

const App = () => {
  
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <Display countries={countries} filter={filter} setFilter={setFilter}/>
    </div>
  )
}

export default App
