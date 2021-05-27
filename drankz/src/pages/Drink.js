import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import BackItUp from '../components/BackItUp';
import Breadcrumb from '../components/Breadcrumb';
import Loading from '../components/Loading'
import { ingredientCount } from '../utils/utils';

function Drink() {

    let { id } = useParams();

    const URL_DRINK_DETAILS = process.env.REACT_APP_URL_DRINK_DETAIL_BY_ID + id;
    const [drinkDetails, setDrinkDetails] = useState(null);

    useEffect(() => {
  
        async function fetchDrinkDetails() {
          try {
            const response = await fetch(URL_DRINK_DETAILS);
            const apiData = await response.json();
            setDrinkDetails(apiData);
          } catch(error) {
            console.log(error);
          }
        }
        fetchDrinkDetails();
      }, [URL_DRINK_DETAILS])

      
      console.log("🍹 Drink detail: ", drinkDetails);

      if (!drinkDetails) {
        return <Loading />
      }
  
      const drink = drinkDetails.drinks[0];

    return(
        <>
        <Breadcrumb drinkName={drink.strDrink} />
        <div className="row c-drink">
            <div className="col-12 col-sm-4">
                <img className="img-fluid rounded text-center drink-image" src={drink.strDrinkThumb} alt={`${drink.strDrink} ${drink.strImageAttribution}`} loading="lazy" />
            </div>
            <div className="col-12 col-sm-8">
                <div className="drink-info">
                <h2>{drink.strDrink}</h2>
                <h3>TL;DR</h3>
                <p className="card-text">
                The {drink.strDrink} is {drink.strAlcoholic === "Alcoholic" ? "an" : "a"} {drink.strAlcoholic} {drink.strCategory === "Ordinary Drink" ? "drink" : drink.strCategory} served in a {drink.strGlass} &amp; made with { ingredientCount(drink.strIngredient1,drink.strIngredient2,drink.strIngredient3,drink.strIngredient4,drink.strIngredient5,drink.strIngredient6,drink.strIngredient7,drink.strIngredient8,drink.strIngredient9,drink.strIngredient10,drink.strIngredient11,drink.strIngredient12,drink.strIngredient13,drink.strIngredient14,drink.strIngredient15) } ingredients.
                </p>
                <h3>Ingredients</h3>
                <ul className="ingredient-list">
                    <li>{drink.strIngredient1 ? `${drink.strMeasure1} ${drink.strIngredient1}` : null}</li>
                    <li>{drink.strIngredient2 ? `${drink.strMeasure2} ${drink.strIngredient2}` : null}</li>
                    <li>{drink.strIngredient3 ? `${drink.strMeasure3} ${drink.strIngredient3}` : null}</li>
                    <li>{drink.strIngredient4 ? `${drink.strMeasure4} ${drink.strIngredient4}` : null}</li>
                    <li>{drink.strIngredient5 ? `${drink.strMeasure5} ${drink.strIngredient5}` : null}</li>
                    <li>{drink.strIngredient6 ? `${drink.strMeasure6} ${drink.strIngredient6}` : null}</li>
                    <li>{drink.strIngredient7 ? `${drink.strMeasure7} ${drink.strIngredient7}` : null}</li>
                    <li>{drink.strIngredient8 ? `${drink.strMeasure8} ${drink.strIngredient8}` : null}</li>
                    <li>{drink.strIngredient9 ? `${drink.strMeasure9} ${drink.strIngredient9}` : null}</li>
                    <li>{drink.strIngredient10 ? `${drink.strMeasure10} ${drink.strIngredient10}` : null}</li>
                    <li>{drink.strIngredient11 ? `${drink.strMeasure11} ${drink.strIngredient11}` : null}</li>
                    <li>{drink.strIngredient12 ? `${drink.strMeasure12} ${drink.strIngredient12}` : null}</li>
                    <li>{drink.strIngredient13 ? `${drink.strMeasure13} ${drink.strIngredient13}` : null}</li>
                    <li>{drink.strIngredient14 ? `${drink.strMeasure14} ${drink.strIngredient14}` : null}</li>
                    <li>{drink.strIngredient15 ? `${drink.strMeasure15} ${drink.strIngredient15}` : null}</li>
                </ul>
                
                <h3>Instructions</h3>
                <p className="drink-instructions">{drink.strInstructions}</p>
                <BackItUp text="Back to the drinks!" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Drink;