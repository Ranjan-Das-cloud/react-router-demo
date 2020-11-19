import React, { Component } from 'react';
import Card from './card';
import './style.css';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <div class="jumbotron">
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4"></hr>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>

            <div className="container">
                <div class="row">
                    <div className="col-4">
                        <Card content="Product-1"/>
                    </div>
                    <div className="col-4">
                        <Card content="Product-2"/>
                    </div>
                    <div className="col-4">
                        <Card content="Product-3"/>
                    </div>
                </div>
            </div>
            </div>
         );
    }
}
 
export default Home;