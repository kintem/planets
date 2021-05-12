import React from 'react';
import Button from '../Button';
import './PlanetForm.css';

const PlanetForm = () => {
  return (
    <form className="form">
      <div className="inputContainer">
        <label htmlFor="">Name</label>
        <input type="text"/>
      </div>
      <div className="inputContainer checkbox">
        <label htmlFor="">True</label>
        <input type="checkbox"/>
      </div>
      <div className="inputContainer">
        <label htmlFor="">Type</label>
        <select name="" id="">
          <option value="">terrestrial</option>
          <option value="">gas giant</option>
        </select>
      </div>
      <div className="inputContainer">
        <label htmlFor="">Moons</label>
        <input type="number"/>
      </div>
      {/* <input type="submit"/> */}
      <Button icon="plus"/>
    </form>
  )
}

export default PlanetForm;