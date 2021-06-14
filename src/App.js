import './App.css';
import { Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Welcome from './components/Welcome/Welcome';
import Home from './components/Home/Home';
import Details from "./components/Details/Details"
import NewPokemon from "./components/Newpokemon/Newpokemon"
import Notfound from "./components/Notfound/Notfound"

function App() {
  return (
    <div className="App">
      <Route
        path='/'
        render={() => <Nav />}
      />
      <Route
        exact path='/'
        render={() => <Welcome />}
      />
      <Route
        exact path='/home'
        render={() => <Home />}
      />
      <Route
        path='/pokemonDetails/:id'
        component={Details}
      />
      <Route
        path='/new'
        component={NewPokemon}
      />
      <Route
        path='/pokemonDetails/Not_found'
        component={Notfound}
      />
    </div>
  );
}

export default App;
