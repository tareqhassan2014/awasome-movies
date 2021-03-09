import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import MovieDitail from './components/MovieDitail/MovieDitail';
import Movies from './components/Movies/Movies';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/ditail">
          <MovieDitail />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

      <Movies />
      <NavBar />
      <MovieDitail />
    </Router>
  );
}

export default App;
