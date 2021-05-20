import './App.css';
import { useState } from 'react';
import PlanetTable from './components/PlanetTable';
import PlanetForm from './components/PlanetForm';

function App() {
  const [ planetData, setPlanetData ] = useState([]);
  const [ response, setResponse ] = useState('');

  const getPlanetData = async () => {
    const response =  await fetch('https://borneo-planets.herokuapp.com/planets');
    const jsonResponse = await response.json()
    setPlanetData(jsonResponse);
  }

  const handleDelete = async (id) => {
    const url = `https://borneo-planets.herokuapp.com/planets/${id}`;
    const response = await fetch(url, {method: 'DELETE'});
    
    if (!response.ok) {
      throw new Error(response.status)
    }

    setResponse("Successfully deleted planet");
  }

  const postPlanetData = async (data) => {
    const response = await fetch('https://borneo-planets.herokuapp.com/planets', 
    {
      method: 'POST', 
      body: JSON.stringify(data), 
      headers: {'Content-Type': 'application/json'}
    })

    if (!response.ok) {
      throw new Error(response.status)
    }

    setResponse("Successfully added planet")
  }
  
  return (
    <main className="App">
      <div className="spaceContainer">
          {planetData.length === 0 ? 
            <button className="planetsButton" onClick={getPlanetData}>Explore Space</button> : <div>
              <PlanetTable data={planetData} handleDelete={handleDelete}/>
              <PlanetForm response={response} postPlanetData={postPlanetData} />
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
