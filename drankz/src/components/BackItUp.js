import { Link } from 'react-router-dom';

function BackItUp({ text }) {
    return (
        <p className="back-it-up"><Link to="/">&larr; {text} </Link></p>
    )
}

export default BackItUp;