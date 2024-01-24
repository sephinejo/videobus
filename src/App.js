import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  const [searched, setSearched] = useState([]);
  const navigate = useNavigate();

  const addHandler = (keyword) => {
    setSearched((prev) => [keyword, ...prev]);
  };

  const deleteHandler = (keyword) => {
    const remained = searched?.filter((k) => k !== keyword);
    setSearched(remained);
    navigate('/');
  };

  return (
    <div className='appContainer'>
      <Header onAdd={addHandler} onDelete={deleteHandler} />
      <div className='outlet'>
        <SideBar searched={searched} onDelete={deleteHandler} />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
