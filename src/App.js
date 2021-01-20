import { Redirect, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js.map";
import About from './About';
import './App.css';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Service from './Service';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
     
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/service' component={Service}/>
      <Route exact path='/about' component={About}/>
      <Redirect to="/" />
      
      
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
