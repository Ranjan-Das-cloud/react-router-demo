import React, { Component } from 'react';

class Card extends Component {
    /*state = { }*/

    render() { 

        let todo = this.props.todo;
        console.log(todo);

        return ( 
            <div className="card">
                <img className="card-img-top" src="https://repository-images.githubusercontent.com/19872456/05dca500-f010-11e9-9588-a96554294e4e" alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
         );
    }
}
 
export default Card;