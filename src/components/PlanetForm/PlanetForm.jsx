import React, { useState } from 'react';
import './PlanetForm.css';

const PlanetForm = ({response, postPlanetData}) => {
  const [ planetName, setPlanetName ] = useState('');
  const [ hasKnownLife, setHasKnownLife ] = useState(false);
  const [ planetType, setPlanetType ] = useState('');
  const [ noOfMoons, setNoOfMoons ] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPlanet = {
      name: planetName[0].toUpperCase() + planetName.slice(1),
      hasKnownLife: hasKnownLife,
      type: planetType,
      noOfMoons: parseInt(noOfMoons),
    };

    console.log(newPlanet);
    postPlanetData(newPlanet);
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
      <p>{response}</p>
    </div>
  )
}

export default PlanetForm;