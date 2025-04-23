import React, { useState } from 'react';
import './App.css';


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || email.trim() === '') {
      setError('Please fill in all fields.');
      setSubmitted(false);
    } else if (!email.includes('@')) {
      setError('Please enter a valid email.');
      setSubmitted(false);
    } else {
      setError('');
      setSubmitted(true);
    }
  };


  return (
    <div className="App">
      <h2>Exam Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Register</button>
      </form>


      {error && <p style={{ color: 'red' }}>{error}</p>}


      {submitted && (
        <div style={{ marginTop: '20px' }}>
          <h3>Registration Successful!</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
}


export default App;



