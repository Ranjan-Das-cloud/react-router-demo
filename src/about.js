import React, { Component } from 'react';
import Card from './card';
import './style.css';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <div className="row mt-5">
                    <div className="col-8">
                    <h1>About Us</h1><br></br>
                        <Card content="This is about page"/>
                    </div>

                </div>
            </div>
         );
    }
}
 
export default About;