import React from 'react';
import style from './recipe.module.css'; 

//essentially, passing data from App component's state to Recipe component through props
const Recipe = ({title, calories, image, ingredients}) => { //destructure props with {}
    return(
        <div className={style.recipe}>
            <h1 className="display-4 p-3">{title}</h1>
            <ul> 
                {ingredients.map(ingredient => (
                    <li className="lead">{ingredient.text}</li>
                ))}
            </ul>
            <p>Calories: {Math.floor(calories)}g</p>
            <img className={style.image} src={image} alt="We could not display the image."/>
        </div>
    );
}

export default Recipe;