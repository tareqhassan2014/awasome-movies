import './App.css';
import Home from './components/Home/Home';
import MovieDitail from './components/MovieDitail/MovieDitail';
import Movies from './components/Movies/Movies';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div>
      <Home/>
      <Movies/>
      <NavBar/>
      <MovieDitail/>
    </div>
  );
}

export default App;
