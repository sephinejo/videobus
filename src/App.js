import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Header from './components/Header';
import { YoutubeApiProvider } from './context/YoutubeApiContext';
import { SearchHistoryProvider } from './context/SearchHistoryContext';

const queryClient = new QueryClient();

function App() {
  return (
    <div className='appContainer'>
      <YoutubeApiProvider>
        <SearchHistoryProvider>
          <QueryClientProvider client={queryClient}>
            <Header />
            <Outlet />
          </QueryClientProvider>
        </SearchHistoryProvider>
      </YoutubeApiProvider>
    </div>
  );
}

export default App;
