import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Logo from './assets/cheers.svg';

function App() {
  return (
    <div id="cheers">
      
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="align-middle text-center"> <img src={Logo} width="36" height="36" alt="Cheers" />
               Cheers</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            Column
          </div>
          <div className="col">
            Column
          </div>
          <div className="col">
            Column
          </div>
        </div>
    </div>
  </div>
  );
}

export default App;
