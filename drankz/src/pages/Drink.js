import { useParams } from "react-router-dom";

function Drink() {

    let { id } = useParams();

    return(
        <div className="row c-drink">
            <div className="col">
            <h2>Drink {id}</h2>
            </div>
        </div>
        
    )
}

export default Drink;