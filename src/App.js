import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  const [searched, setSearched] = useState([]);

  const addHandler = (keyword) => {
    setSearched((prev) => [keyword, ...prev]);
  };

  return (
    <div className='appContainer'>
      <Header onAdd={addHandler} />
      <div className='outlet'>
        <SideBar searched={searched} setSearched={setSearched} />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
