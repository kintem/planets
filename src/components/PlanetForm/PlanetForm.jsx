import React, { useState } from 'react';
import './PlanetForm.css';

const PlanetForm = () => {
  const [ planetName, setPlanetName ] = useState('');
  const [ hasKnownLife, setHasKnownLife ] = useState(false);
  const [ planetType, setPlanetType ] = useState('');
  const [ noOfMoons, setNoOfMoons ] = useState(0);
  const [ newPlanet, setNewPlanet ] = useState({});
  const [ response, setResponse ] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewPlanet({
      name: planetName[0].toUpperCase() + planetName.slice(1),
      hasKnownLife: hasKnownLife,
      type: planetType,
      noOfMoons: parseInt(noOfMoons),
    })

    console.log(newPlanet);
    postPlanetData(newPlanet);
  }

  const postPlanetData = (data) => {
    fetch('https://borneo-planets.herokuapp.com/planets', 
    {
      method: 'POST', 
      body: JSON.stringify(data), 
      headers: {'Content-Type': 'application/json'}
    })
    .then((response) => response.json())
    .then((jsonResponse) => {
      console.log(jsonResponse)
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="formContainer">
      <form className="form" onSubmit={(e)=> {handleSubmit(e)}}>
        <div className="inputContainer">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" onInput={(e) => setPlanetName(e.target.value)}/>
        </div>
        <div className="inputContainer checkbox">
          <label htmlFor="hasKnownLife">True</label>
          <input id="hasKnownLife" type="checkbox" onInput={() => setHasKnownLife(!hasKnownLife)}/>
        </div>
        <div className="inputContainer">
          <label htmlFor="type">Type</label>
          <select name="type" id="type" value={planetType} onChange={(e) => setPlanetType(e.target.value)}>
            <option defaultValue="terrestrial">terrestrial</option>
            <option value="gasGiant">gas giant</option>
            <option value="iceGiant">ice giant</option>
            <option value="dwarf">dwarf</option>
          </select>
        </div>
        <div className="inputContainer">
          <label htmlFor="noOfMoons">Moons</label>
          <input id="noOfMoons" type="number" onInput={(e) => setNoOfMoons(e.target.value)}/>
        </div>
        <div className="submitContainer">
          <input type="submit" value="+" className="submit"/>
        </div>
      </form>
      <p>success!</p>
    </div>
  )
}

export default PlanetForm;