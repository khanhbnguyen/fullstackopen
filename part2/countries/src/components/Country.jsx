import { useState } from 'react'
import { useEffect } from 'react'

import axios from 'axios'

const Country = ({country}) => {

    const [temperature, setTemperature] = useState(null)
    const [wind, setWind] = useState(null)
    
    useEffect(() => {
        const [latitude, longitude] = country.capitalInfo.latlng

        axios
        .get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&wind_speed_unit=ms`)
        .then(response => {
            setTemperature(response.data.current.temperature_2m)
            setWind(response.data.current.wind_speed_10m)
        })
    }, [])

    const languages = Object.values(country.languages)

    return (
        <div>
            <h1>{country.name.official}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h2>languages</h2>
            <ul>
                {languages.map(language => <li key={language}>{language}</li>)}
            </ul>
            <img src={country.flags.png}/>
            <h2>Weather in {country.capital}</h2>
            <p>temperature {temperature} Celsius</p>
            <p>wind {wind} m/s</p>
        </div>
    )
}

export default Country