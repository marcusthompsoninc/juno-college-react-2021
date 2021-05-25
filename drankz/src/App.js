import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';


function App() {

  const URL_POPULAR_COCKTAILS = process.env.REACT_APP_URL_POPULAR_COCKTAILS;

  return (
  <div id="cheers">
    <div className="container">
      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-10 col-md-8 col-lg-6">
          <Form />
        </div>
      </div>

      <div className="row">
        <Results url={URL_POPULAR_COCKTAILS} />
      </div>
    </div>
  </div>
  );
}

export default App;
