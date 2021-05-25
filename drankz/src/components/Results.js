import useFetch from '../api/useFetch';

function Results( { url } ) {

    //console.log(url);

    const res = useFetch(url, {});
    if (!res.response) {
      return <div>Loading...</div>
    }

    const drinks = res.response.drinks;

    const listResults = drinks.map(drink =>

        <div className="col">
        <div className="card mb-3" key={drink.idDrink}>
            <div className="row g-0">
                <div className="col-md-5">
                    <img className="img-fluid rounded-start" src={drink.strDrinkThumb + "/preview"} alt={drink.strDrink} />
                </div>
                <div className="col-md-7">
                <div className="card-body">
                <h3>{drink.strDrink}</h3>
                <p className="card-text"><span className="badge bg-primary">{drink.strCategory}</span>
                {drink.strAlcoholic ? <span className="badge bg-danger">{drink.strAlcoholic}</span> :  <span className="badge bg-warning text-dark">Non-alcoholic</span>  }
                <span className="badge bg-info text-dark">{drink.strGlass}</span></p>
                </div>
                </div>
            </div>
        </div>
        </div>
      );


        return (
            <div className="c-results" >
                <div className="row">
                    <h3>Popular Drinks</h3>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">      
                    {listResults}
                </div>
            </div>
        );
}

export default Results