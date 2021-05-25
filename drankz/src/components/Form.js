function Form(props) {
    return (
        <form id="search-form">
            <label htmlFor="search-input" className="visually-hidden">Search for a cocktail by ingredient name</label>
        <div className="input-group mb-3">
            <input type="text" className="form-control form-control-lg search-input" id="search-input" placeholder="Search for a cocktail by ingredient name" />
            <button className="btn btn-outline-secondary btn-search" type="button" id="button-addon2">Drink up!</button>
        </div>
        </form>
    )
}

export default Form;

