import BackItUp from '../components/BackItUp';

function About() {
    return (
        <div className="row c-page c-page--about justify-content-center">
            <div className="col-11 col-md-8">
                <h2>About page</h2>
                <p>Cheers is a react application that allows you to search for drinks by ingredients using <a href="https://www.thecocktaildb.com/api.php" title="The Cocktail DB">The Cocktail DB</a> api.</p>
                <h3>Built with</h3>
                <ul>
                    <li><a href="https://reactjs.org/">React</a> (HOOKS 🎣)</li>
                    <li><a href="https://getbootstrap.com/">Bootstrap v5.0.1</a></li>
                    <li><a href="https://www.thecocktaildb.com/api.php">The Cocktail DB API</a></li>
                    <li>SVG's from <a href="https://www.svgrepo.com/">SVG Repo</a></li>
                    <li>Animated preloader from <a href="https://loading.io/">Loading.io</a></li>
                </ul>
                <h3>Shout outs</h3>
                <p>Thank you to all of the instructors (Talia, Darshana & Zena) at <a href="https://junocollege.com/course/react/">Juno College</a> for guiding us in this endeavour.</p>
                <h3>ToDo...</h3>
                <ul>
                    <li>Add tests 🧪 </li>
                    <li>Allow users to login 🦹 </li>
                    <li>Allow users to save their favorites 💾 </li>
                    <li>Move API keys into a database 🔑 </li>
                </ul>
                <BackItUp text="Back to the drinks!" />
            </div>
            
        </div>
        
    )
}

export default About;