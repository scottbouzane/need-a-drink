import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'
import axios from 'axios'



function App() {
  
  const BASE_URL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/brewapp`
  const config = {
    headers: {
    Authorization : `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
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
      {
        
      }
      
    </div>
  );
}

export default App;
