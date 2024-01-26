import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Header from './components/Header';

import { YoutubeApiProvider } from './context/YoutubeApiContext';

const queryClient = new QueryClient();

function App() {
  const [searched, setSearched] = useState([]);
  const navigate = useNavigate();

  const addHandler = (keyword) => {
    if (searched.includes(keyword)) return;
    setSearched((prev) => [keyword, ...prev]);
  };

  const deleteHandler = (keyword) => {
    const remained = searched?.filter((k) => k !== keyword);
    setSearched(remained);
    navigate('/');
  };

  return (
    <div className='appContainer'>
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Header onAdd={addHandler} onDelete={deleteHandler} />
          <Outlet searched={searched} onDelete={deleteHandler} />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </div>
  );
}

export default App;
