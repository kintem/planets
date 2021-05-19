import './App.css';
import { useState } from 'react';
import PlanetTable from './components/PlanetTable';
import PlanetForm from './components/PlanetForm';

function App() {
  const [ planetData, setPlanetData ] = useState([]);

  const getPlanetData = () => {
    fetch('https://borneo-planets.herokuapp.com/planets')
    .then((response) => response.json())
    .then((jsonResponse) => {
      setPlanetData(jsonResponse);
    })
  }
  
  return (
    <main className="App">
      <div className="spaceContainer">
          {planetData.length === 0 ? 
            <button className="planetsButton" onClick={getPlanetData}>Explore Space</button> : <div>
              <PlanetTable data={planetData} />
              <PlanetForm />
            </div>
          }
      </div>
        <p className="attribution">Photo by 
          <a href="https://unsplash.com/@jeremythomasphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Jeremy Thomas</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>
    </main>
  );
}

export default App;
