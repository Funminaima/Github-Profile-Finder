import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./Components/Layout/Navbar";
import Users from "./Components/Users/Users";
import SearchForm from './Components/Users/SearchForm';
import Alert from './Components/Layout/Alert';
import About from './Components/Pages/About';
import SingleUser from './Components/Users/SingleUser';
import {Provider} from 'react-redux';
import store from './redux/Store';

function App() {

  return (
    <Provider store={store}>
    <div className="App">
      <Navbar tittle="Github User Finder" icon="fa fa-github"/>
      
      {/* wrap users component in a container */}
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Alert/>
            <SearchForm />
            <Users/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/user/:login">
            <SingleUser 
            />
          </Route>
        </Switch>
      
      </div>
      
    </div>
    </Provider>
  );
}



export default App;
