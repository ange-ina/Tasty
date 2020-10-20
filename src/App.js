import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import './Components/Header.css'
import './Components/Details.css'
import './Components/PreparationHeader.css'
import Header from './Components/Header';
import Category from './Components/Category';
import Recipee from './Components/Recipee';
import Footer from './Components/Footer';
import Random from './Components/Random';
import Search from './Components/Search';
import Fridge from './Components/Fridge';

function App(props) {
     return (
          <Router>
               {props.children}
               <Header />
               <Switch>
                    <Route path='/' exact>
                         <Home />
                    </Route>
                    <Route path='/categories/:type' component={Category} />
                    <Route path='/recipee/:id' component={Recipee} />
                    <Route path='/random'>
                         <Random />
                    </Route>
                    <Route path='/search/:query' component={Search} />
                    <Route path='/fridge'>
                         <Fridge />
                    </Route>
               </Switch>
               <Footer />
          </Router>
     );
}
export default App;