import useFetch from '../api/useFetch';
import { Link } from 'react-router-dom';
import NoResults from './NoResults';
import { ingredientCount } from '../utils/utils';
import Loading from '../components/Loading';

function Results( { url, title } ) {


    const res = useFetch(url, {});
    if (!res.response) {
      return <Loading />
    }

    const drinks = res.response.drinks;
    let listResults = null;

    if(drinks) {

        listResults = drinks.map(drink =>

        <div className="col" key={drink.idDrink}>
        <Link to={`/drink/${drink.idDrink}`} className="result-link">
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-5">
                    <img className="img-fluid rounded-start" src={drink.strDrinkThumb + "/preview"} alt={`${drink.strDrink} ${drink.strImageAttribution}`} loading="lazy" />
                </div>
                <div className="col-7">
                <div className="card-body">
                <h3>{drink.strDrink}</h3>
                <p className="card-text">
                {drink.strAlcoholic === "Alcoholic" ? "An" : "A"} {drink.strAlcoholic} {drink.strCategory === "Ordinary Drink" ? "drink" : drink.strCategory} served in a {drink.strGlass} &amp; made with { ingredientCount(drink.strIngredient1,drink.strIngredient2,drink.strIngredient3,drink.strIngredient4,drink.strIngredient5,drink.strIngredient6,drink.strIngredient7,drink.strIngredient8,drink.strIngredient9,drink.strIngredient10,drink.strIngredient11,drink.strIngredient12,drink.strIngredient13,drink.strIngredient14,drink.strIngredient15) } ingredients.
                </p>
                <button className="link-like" tabIndex="-1">Make this drink</button>
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
                    <h2 className="results-title">{title.length > 0 ? `Drinks containing '${title}'` : "Popular Drinks"}</h2>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">      
                    {listResults}
                </div>
            </div>
        );
}

export default Results