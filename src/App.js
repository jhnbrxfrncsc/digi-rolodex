import React, { useEffect, useState } from 'react';
import './app.css';
import axios from 'axios';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

const App = () => {
  const [digimons, setDigimons] = useState([]);
  const [searchField, setSearchField] = useState();
  const url = "https://digimon-api.herokuapp.com/api/digimon/level/rookie";
  const getUsers = async () => {
    const digiData = await axios.get(url);
    setDigimons(digiData.data);
  }
  
  useEffect(() => {
    getUsers();
  }, []);
  
  const searchEvent = (e) => {
    setSearchField(e.target.value)
  }

  const filteredDigimons = digimons.filter((digimon) => {
    if(searchField){
        return digimon.name.toLowerCase().includes(searchField.toLowerCase())
    } else {
        return digimon;
    }
  });
  
  return (
    <div className='App'>
      <h1>Digimon Rolodex</h1>
      <SearchBox handleChange={searchEvent} placeholder="Search..." />
      <CardList digimons={filteredDigimons} />
    </div>
  )
}

export default App;