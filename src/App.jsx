import './App.css';
import { useState } from 'react';
import PlanetTable from './components/PlanetTable';
import Button from './components/Button';
import PlanetForm from './components/PlanetForm';

function App() {
  const [ planetData, setPlanetData ] = useState([]);

  const fakeData = [
    {"id":1,"name":"Mercury","hasKnownLife":false,"type":"terrestrial","noOfMoons":0},
    {"id":2,"name":"Venus","hasKnownLife":false,"type":"terrestrial","noOfMoons":0},
    {"id":3,"name":"Earth","hasKnownLife":true,"type":"terrestrial","noOfMoons":1},
    {"id":4,"name":"Mars","hasKnownLife":false,"type":"terrestrial","noOfMoons":2},
    {"id":5,"name":"Jupiter","hasKnownLife":false,"type":"gas giant","noOfMoons":59},
    {"id":6,"name":"Saturn","hasKnownLife":false,"type":"gas giant","noOfMoons":53},
    {"id":7,"name":"Uranus","hasKnownLife":false,"type":"gas giant","noOfMoons":27},
    {"id":8,"name":"Neptune","hasKnownLife":false,"type":"gas giant","noOfMoons":14}
  ]

  // const getPlanetData = () => {
  //   fetch('https://borneo-planets.herokuapp.com/planets')
  //   .then((response) => response.json())
  //   .then((jsonResponse) => {
  //     setPlanetData(jsonResponse);
  //   })
  // }

  // onClick={getPlanetData}
  
  return (
    <main className="App">
      <div className="spaceContainer">
        {/* <button className="planetsButton">Explore Space</button> */}
        {/* {planetData.length === 0 ? <button className="planetsButton">Explore Space</button> : <PlanetTable data={fakeData} />} */}
        <PlanetTable data={fakeData} />
      </div>
      <PlanetForm />
      {/* <Button text="Add Planet" /> */}
        <p className="attribution">Photo by 
          <a href="https://unsplash.com/@jeremythomasphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jeremy Thomas</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>
    </main>
  );
}

export default App;
