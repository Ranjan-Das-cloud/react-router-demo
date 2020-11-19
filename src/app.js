import React, { Component } from 'react';
import Form  from './form';

import Home from './home';
import Contact from './contact';
import About from './about';
import Navbar from './navbar';
import { Route, Switch } from 'react-router';
import Error from './error';

class APP extends Component {
    state = { }

    render() { 
        return ( 
            
            <div>
                <Navbar/>
                <Switch>
                    <Route path='/' component= { Home } exact></Route>
                    <Route path='/about' component= { About }></Route>
                    <Route path='/contact' component= { Contact }></Route>
                    <Route component={ Error }></Route>
                </Switch>
            </div>
            
         );
    }
}
 
export default APP;