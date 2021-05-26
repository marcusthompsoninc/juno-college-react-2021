import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UrlContext from './context/UrlContext'

import Home from './pages/Home';
import About from './pages/About';
import Drink from './pages/Drink';


function App() {

  const URL_POPULAR_COCKTAILS = process.env.REACT_APP_URL_POPULAR_COCKTAILS;
  const URL_ALL_DRINKS = process.env.REACT_APP_URL_ALL_COCKTAILS;
  const URL_ALL_INGREDIENTS = process.env.REACT_APP_URL_LIST_INGREDIENTS;
  const URL_SEARCH = process.env.REACT_APP_URL_SEARCH;

  const [allDrinks, setAllDrinks] = useState(null);
  const [popularDrinks, setPopularDrinks] = useState(null);
  const [ingredients, setIngredients] = useState(null);
  const [searchURL, setSearchURL] = useState(URL_POPULAR_COCKTAILS);
  // eslint-disable-next-line 
  const [baseSearchURL, setBaseSearchURL] = useState(URL_SEARCH);

  function updateUrl(url) {
    console.log("🔗 update search URL to: ", url );
    setSearchURL(url);
  }

  useEffect(() => {
  
    async function fetchIngredients() {
      try {
        const response = await fetch(URL_ALL_INGREDIENTS);
        const apiData = await response.json();
        setIngredients(apiData);
      } catch(error) {
        console.log(error);
      }
    }
    fetchIngredients();
  });

  useEffect(() => {
  
    async function fetchAllDrinks() {
      try {
        const response = await fetch(URL_ALL_DRINKS);
        const apiData = await response.json();
        setAllDrinks(apiData);
      } catch(error) {
        console.log(error);
      }
    }
    fetchAllDrinks();
  })

  useEffect(() => {
  
    async function fetchPopularDrinks() {
      try {
        const response = await fetch(URL_ALL_DRINKS);
        const apiData = await response.json();
        setPopularDrinks(apiData);
      } catch(error) {
        console.log(error);
      }
    }
    fetchPopularDrinks();
  })

  console.log("🍹 All drinks", allDrinks);
  console.log("📈 Popular drinks", popularDrinks);
  console.log("🍸 Ingredients", ingredients);

  return (
  <div id="cheers">
    <UrlContext.Provider value={{baseSearchURL, updateUrl}}>
    <div className="container">
      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>

      <Router>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/drink/:id" children={<Drink />} />
          <Route path="/">
            <Home url={searchURL} />
          </Route>
        </Switch>
      </Router>

    </div>
    </UrlContext.Provider>
  </div>
  );
}

export default App;
