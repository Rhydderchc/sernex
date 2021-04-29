
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './Pages/About'
import ContactUs from './Pages/ContactUs'
import Home from './Pages/Home'
import './App.css';

function App() {

  return (
    <div className="App" style={{backgroundColor:"#5cdb95"}}>
      <Router>
        <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}></Route>
        <Route path='/contact' component={ContactUs}></Route>
       </Switch>
      </Router>
    </div>
    
  );
}

export default App;