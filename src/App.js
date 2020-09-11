import React from 'react'; 

import {
   BrowserRouter as Router,
   Route,
   Switch
} from 'react-router-dom'

import Header from './components/Header'
import Home from './views/Home'
import About from './views/About'
import Products from './views/products/Products'
import Contact from './views/Contact'
import Movies from './views/Movie/Movies'

function App() {
  return (
    <>
      <Router>
         <Header />
         <div className="p-5">
            <Switch>
               <Route exact path="/"><Home /></Route>
               <Route exact path="/about"><About /></Route>
               <Route exact path="/Products"><Products /></Route>
               <Route exact path="/contact"><Contact /></Route>
               <Route exact path="/Movies"><Movies /></Route>
            </Switch>
         </div>
      </Router>
    </>
  );
}

export default App;
