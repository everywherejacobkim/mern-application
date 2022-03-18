import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Register</h1>
      <form style={{display: 'flex', flexDirection: 'column'}}>
        <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Name"></input>
        <input value={email} type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"></input>
        <input value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"></input>
      </form>
    </div>
  );
}

export default App;
