import React, { Component } from 'react';

import { Link } from 'react-router-dom';

/*class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
        <div id='navbar'>Hello World</div>
        );
    }
}*/

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
        <nav className="navbar bg-primary">
            <a href="#" className="navbar-brand text-white"><h2>Flipkart</h2></a>
            <ul className="menu">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
        );
    }
}
 
export default Navbar;