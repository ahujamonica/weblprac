import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [joke, setJoke] = useState('');
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/jokes/random')
      .then((res) => res.json())
      .then((data) => setJoke(`${data.setup} - ${data.punchline}`))
      .catch(() => setError('Failed to fetch joke'));
  }, []);
 
  return (
    <div className="App">
      <h1>Random Joke</h1>
      {error ? <p>{error}</p> : <p>{joke}</p>}
    </div>
  );
}


export default App;
