import React from 'react';
import './PlanetTable.css';

const PlanetTable = ({data, handleDelete}) => {
  const dataJSX = data.map(obj => (
      <tr>
        <td>{obj.name}</td>
        <td>{obj.hasKnownLife.toString()}</td>
        <td>{obj.type}</td>
        <td>{obj.noOfMoons}</td>
        <td>
          <div className="deleteContainer">
            <button onClick={() => handleDelete(obj.id)}>-</button>
          </div>
        </td>
      </tr>
    )
  );

  return (
    <table className="planetTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Known life</th>
          <th>Type</th>
          <th>Confirmed Moons</th>
        </tr>
      </thead>
      <tbody>
        {dataJSX}
      </tbody>
    </table>
  )
}

export default PlanetTable;