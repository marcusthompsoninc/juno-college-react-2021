import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/Header';
import Form from './components/Form';

//console.log(process.env.REACT_APP_COCKTAIL_API_KEY)
//console.log(process.env.REACT_APP_URL_10_RANDOM_COCKTAILS)

function App() {
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
    </div>
  </div>
  );
}

export default App;
