import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Contactlist from './component/Contactlist';
import Addcontact from './component/Addcontact';
import Header from './component/Header';
import Editcontact from './component/Editcontact';

function App() {
  return (
    <div className="">
      <Router>
        <Route path='/' component={Header}/>
        <Route path='/Contact' component={Contactlist}/>
        <Route path='/Ajout' component={Addcontact}/>
        <Route path='/edit/:id' component={Editcontact}/>
      </Router>
     
    </div>
  );
}

export default App;
