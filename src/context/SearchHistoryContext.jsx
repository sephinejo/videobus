import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchHistoryContext = createContext();

export function SearchHistoryProvider({ children }) {
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
    <SearchHistoryContext.Provider
      value={{ searched, addHandler, deleteHandler }}
    >
      {children}
    </SearchHistoryContext.Provider>
  );
}

export function useSearchHistory() {
  return useContext(SearchHistoryContext);
}
