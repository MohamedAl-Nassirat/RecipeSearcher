import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';
import Title from './Title';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  // Declare keys for API by edamame.com
  const  APP_ID = '8a8a1ced';
  const  APP_KEY = '6f77137b20133cd24f2fa39589fe7efa';

  
  // setup states here (essentially empty arrays to store the data in)

  const [recipes, setRecipes] = useState([]); 
  const [search, setSearch] = useState(""); // store user Input in the search
  const [query, setQuery] = useState("")    // Store final query


  useEffect( () => {
    getRecipes();
    }, [query]);

  const getRecipes = async () => {

    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);

  }
  //storing the search
  const getSearch = (e) => { 
    setQuery(search);
    setSearch("");
    e.preventDefault(); //stops page reset 
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  }

  const buttonOver = (e) => {
    e.target.innerHTML = "Search";
  }
  const buttonOut = (e) => {
    e.target.innerHTML = "Search";
  }




  return(
    <div className="App">
      <Title />
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" placeholder="Enter your desired recipe here" value={search} onChange={updateSearch}/> 
        <Button className="search-button" type="submit" onMouseOver={buttonOver} onMouseOut={buttonOut}>Search</Button>
      </form>
     
      <div className="recipe">
      {recipes.map(recipe => ( 
        <Recipe 
        title={recipe.recipe.label} 
        image={recipe.recipe.image}
        calories={recipe.recipe.calories} 
        ingredients={recipe.recipe.ingredients}  // essentially storing the data from api, use recipe.js
        key = {recipe.recipe.label} 
        />
      ))}
      </div>
     
    </div>
  );
}

export default App;
