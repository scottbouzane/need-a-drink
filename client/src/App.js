import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const BASE = 'app2zq4L6guOxQs25'
  const KEY = 'keyT3pmuKrfPrLAwu'
  const BASE_URL = 'https://api.airtable.com/v0/${BASE}/brewapp'
  const config = {
    headers: {
      Authorization : 'Bearer ${KEY}'
    }
  }
  useEffect(() => {
    const getAllBrews = async () => {
      const response = await axios.get(BASE_URL, config)
      console.log(response.data)
    }
    getAllBrews()

  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
