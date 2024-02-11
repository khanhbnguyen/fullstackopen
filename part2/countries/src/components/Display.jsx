import Country from './Country'

const Display = ({countries, filter, setFilter}) => {

  const handleClick = (country) => {
    setFilter(country.name.common)
  }

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

  if (filteredCountries.length > 10) {
    return (
      <p>Too many matches. Specifiy another filter.</p>
    )
  } else if (filteredCountries.length == 1) {
      
    const country = filteredCountries[0]

    return (
      <Country country={country}/>
    )
  } else {
    return (
      <div>
        <ul className="NoBullets">
          {filteredCountries.map(country => <li key={country.cca2}>{country.name.common} <button onClick={() => handleClick(country)}>show</button></li>)}
        </ul>
      </div>
    )
  }
}
  
export default Display