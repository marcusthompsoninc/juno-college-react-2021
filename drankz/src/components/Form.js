import { useState, useContext } from 'react';
import UrlContext from '../context/UrlContext';
import TitleContext from '../context/TitleContext';

function Form() {

    const { baseSearchURL, updateUrl } = useContext(UrlContext);
    const { title, updateTitle } = useContext(TitleContext)

    const [searchIngredient, setSearchIngredient] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
       console.log("🍸 Ingredient searched:",  searchIngredient);
       
       updateTitle(searchIngredient);

       console.log("📛 Search title", title);

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
            <div className="col-12 col-md-8 col-lg-7">
                <form id="search-form">
                    <label htmlFor="search-input" className="visually-hidden">Search for a drink by ingredient name</label>
                <div className="input-group mb-3">
                    <input type="text" className="form-control form-control-lg search-input" id="search-input" placeholder="Search for a drink by ingredient name" value={searchIngredient} onChange={(event) => setSearchIngredient(event.target.value)} />
                    <button className="btn btn-outline-secondary btn-search" type="button" id="button-addon2" onClick={handleSubmit}>Pour it up!</button>
                </div>
                </form>
            </div>
        </div>
        
    )
}

export default Form;

