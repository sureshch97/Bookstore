import react, { Fragment } from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import singlebook from './components/books/singlebook'
import addBook from './components/books/addbook'
import Alert from './components/layout/alert'
import Notfound from './components/pages/notfound'

import Store from './store'
import { Provider } from 'react-redux';

const App = () => {
  
  return (

    <Provider store={Store}>
      <div className="App">
      <Router> 
       <Navbar/>
       <div className="container">
         <Alert/>
       <Switch>
         <Route exact path="/" component={Home}></Route>
         <Route exact path="/about" component={About}></Route>
         <Route exact path="/contact" component={Contact}></Route>
         <Route exact path='/singlebook/:id' component={singlebook}></Route>
         <Route exact path="/addbook" component={addBook}></Route>
         <Route exact component={Notfound}></Route>
        
       </Switch>
       </div>
      </Router>
      
    </div>
    </Provider>
    
  );
}

export default App;
