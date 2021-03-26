import logo from './logo.svg';
// import './App.css';
import {Router, Link} from '@reach/router';
import Home from './components/Home';
import Create from './components/Create';
import Details from './components/Details';
import Edit from './components/Edit';
function App() {
  return (
    <div className="App">
      <div>
        <button><Link to ="/">Home</Link></button>
        <button><Link to ="/create">Add Pet</Link></button>
        {/* <button><Link to ="/"></Link></button>
        <button><Link to ="/"></Link></button> */}
      </div>
      <div className="d-flex.justify-content-center.flex-column">

        <h1>Pet Shelter</h1>
        <br/>
        <Router>
          <Home path='/'></Home>
          <Details path='/pet/:specificid'></Details>
          <Create path='/create'></Create>
          <Edit path='/pet/edit/:specificid'></Edit>
        </Router>
      </div>


    </div>
  );
}

export default App;
