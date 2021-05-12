import React from 'react';
import Button from '../Button/Button';
import './PlanetTable.css';

const PlanetTable = ({data}) => {
  const dataJSX = data.map( obj => (
      <tr>
        <td>{obj.name}</td>
        <td>{obj.hasKnownLife.toString()}</td>
        <td>{obj.type}</td>
        <td>{obj.noOfMoons}</td>
        <td><Button icon="minus"/></td>
      </tr>
    )
  );

  return (
    <table className="planetTable">
      <tr>
        <th>Name</th>
        <th>Known life</th>
        <th>Type</th>
        <th>Confirmed Moons</th>
      </tr>
      {dataJSX}
    </table>
  )
}

export default PlanetTable;