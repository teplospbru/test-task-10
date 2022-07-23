import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './redux/actions';

// Components
import Main from './components/Main';
import Search from './components/Search';

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state);
  useEffect(() => {
    dispatch(getPosts()); // Получаем посты при первой загрузке страницы
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Search />
        {
          isLoading 
            ? <span>Loading...</span> 
            : <Routes>
                <Route path="/:id" element={ <Main /> } /> 
                <Route path="/" element={ <Main /> } /> 
              </Routes>
        }
      </div>
    </Router>
  );
}

export default App;