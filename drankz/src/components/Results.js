import useFetch from '../api/useFetch';
import { Link } from 'react-router-dom';
import NoResults from './NoResults';

function Results( { url } ) {

    function ingredientCount(item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13,item14,item15) {
        
        let ingredientCount = 0;
        
        if(item1) { ingredientCount++; }
        if(item2) { ingredientCount++; }
        if(item3) { ingredientCount++; }
        if(item4) { ingredientCount++; }
        if(item5) { ingredientCount++; }
        if(item6) { ingredientCount++; }
        if(item7) { ingredientCount++; }
        if(item8) { ingredientCount++; }
        if(item9) { ingredientCount++; }
        if(item10) { ingredientCount++; }
        if(item11) { ingredientCount++; }
        if(item12) { ingredientCount++; }
        if(item13) { ingredientCount++; }
        if(item14) { ingredientCount++; }
        if(item15) { ingredientCount++; }

        return ingredientCount
    }

    const res = useFetch(url, {});
    if (!res.response) {
      return <div className="c-loading">Loading..</div>
    }

    const drinks = res.response.drinks;
    let listResults = null;

    if(drinks) {

        listResults = drinks.map(drink =>

        <div className="col" key={drink.idDrink}>
        <Link to={`/drink/${drink.idDrink}`}>
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-5">
                    <img className="img-fluid rounded-start" src={drink.strDrinkThumb + "/preview"} alt={`${drink.strDrink} ${drink.strImageAttribution}`} loading="lazy" />
                </div>
                <div className="col-md-7">
                <div className="card-body">
                <h3>{drink.strDrink}</h3>
                <p className="card-text">
                {drink.strAlcoholic === "Alcoholic" ? "An" : "A"} {drink.strAlcoholic} {drink.strCategory === "Ordinary Drink" ? "drink" : drink.strCategory} served in a {drink.strGlass} &amp; made with { ingredientCount(drink.strIngredient1,drink.strIngredient2,drink.strIngredient3,drink.strIngredient4,drink.strIngredient5,drink.strIngredient6,drink.strIngredient7,drink.strIngredient8,drink.strIngredient9,drink.strIngredient10,drink.strIngredient11,drink.strIngredient12,drink.strIngredient13,drink.strIngredient14,drink.strIngredient15) } ingredients.
                </p>
                <button className="link-like">Make this drink</button>
                </div>
                </div>
            </div>
        </div>
        </Link>
        </div>
      );

    } else {
        return (
            <NoResults text="" />
        );
    }


        return (
            <div className="c-results" >
                <div className="row">
                    <h3>Popular Drinks</h3>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">      
                    {listResults}
                </div>
            </div>
        );
}

export default Results