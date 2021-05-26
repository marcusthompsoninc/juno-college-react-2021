import { useState, useContext } from 'react';
import UrlContext from '../context/UrlContext';

function Form(props) {

    const { baseSearchURL, updateUrl } = useContext(UrlContext)

    const [searchIngredient, setSearchIngredient] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
       console.log("🍸 Ingredient searched:",  searchIngredient);

       const url = new URL(baseSearchURL);

       // define the parameters you need make the query string of a URL
       url.search = new URLSearchParams({
         s: searchIngredient
       })

       updateUrl(url.toString());

       console.log("🤖 Search url:",  url.toString());

    } 

    return (
        <div className="row justify-content-center c-form">
            <div className="col-10 col-md-8 col-lg-6">
                <form id="search-form">
                    <label htmlFor="search-input" className="visually-hidden">Search for a cocktail by ingredient name</label>
                <div className="input-group mb-3">
                    <input type="text" className="form-control form-control-lg search-input" id="search-input" placeholder="Search for a cocktail by ingredient name" value={searchIngredient} onChange={(event) => setSearchIngredient(event.target.value)} />
                    <button className="btn btn-outline-secondary btn-search" type="button" id="button-addon2" onClick={handleSubmit}>Pour it up!</button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Form;

