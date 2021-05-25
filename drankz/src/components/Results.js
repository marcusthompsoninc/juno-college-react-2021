import useFetch from '../api/useFetch';

function Results( { url } ) {

    //console.log(url);

    const res = useFetch(url, {});
    if (!res.response) {
      return <div>Loading...</div>
    }

    const drinks = res.response.drinks;

    const listResults = drinks.map(drink =>
        <div key={drink.idDrink}>
              <h3>{drink.strDrink}</h3>
              <ul>
                  <li><img src={drink.strDrinkThumb + "/preview"} alt="{drink.strDrink}" /></li>
                <li>
                <span className="badge bg-primary">{drink.strCategory}</span>
                {drink.strAlcoholic ? <span className="badge bg-danger">{drink.strAlcoholic}</span> :  <span className="badge bg-warning text-dark">Non-alcoholic</span>  }
                <span className="badge bg-info text-dark">{drink.strGlass}</span>
                </li>
              </ul>
        </div>
      );


        return (
            <div className="c-results">
                {listResults}
            </div>
        );
}

export default Results