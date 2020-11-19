import React, { Component } from 'react';
import Card from './card';
import './style.css';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <div className="row mt-5">
                    <div className="col-8">
                        <h1>Contact Us</h1><br></br>
                            <Card content="This is contact page"/>
                    </div>
                    <div className="col-4">
                        <h1>About Us</h1><br></br>
                            <Card content="This is About Us page"/>
                    </div>
                    

                </div>
            </div>
         );
    }
}
 
export default Contact;