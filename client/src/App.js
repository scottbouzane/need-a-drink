import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Name from './components/Name'
import Postal from './components/Postal'
import State from './components/State'
import { Routes, Route } from 'react-router-dom';



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
      <Header />
      <Navbar />

      <Routes>
        <Route path='/name' element={<Name />} />
        <Route path='/postal' element={<Postal />} />
        <Route path='/state' element={<State />} />
        


      </Routes>
      <Footer />





      
    </div>
  );
}

export default App;
