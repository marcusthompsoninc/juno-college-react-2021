
import Form from '../components/Form';
import Results from '../components/Results';

function Home({url}) {
    return (
        <>
        
        <Form />
            
        <Results url={url} />
        </>
    );
}

export default Home;