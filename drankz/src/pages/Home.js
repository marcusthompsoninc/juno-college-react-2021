import Form from '../components/Form';
import Results from '../components/Results';
import { useState } from 'react';
import TitleContext from '../context/TitleContext';


function Home({url}) {

    const [title, setTitle] = useState('');

    function updateTitle(title) {
        console.log("🔗 update title: ", title );
        setTitle(title);
      }

    return (
        <>
        <TitleContext.Provider value={{title, updateTitle}}>
            <Form />
            <Results url={url} title={title} />
        </TitleContext.Provider>
        </>
    );
}

export default Home;