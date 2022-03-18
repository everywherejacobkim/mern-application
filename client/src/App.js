import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch('https://localhost:1337/api/register', {
    method: 'POST',  
    headers: {
      'Content-Type': 'application/json',
    },  
    body: JSON.stringify({
        name,
        email,
        password,
      }), 
    })

    const data = await response.json();
    console.log(data);

  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser} style={{display: 'flex', flexDirection: 'column'}}>
        <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Name"></input>
        <input value={email} type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"></input>
        <input value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"></input>
        <input type="submit" value="Register"></input>
      </form>
    </div>
  );
}

export default App;
