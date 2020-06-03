import React, {Component} from 'react'
import PropTypes from "prop-types"




class Decrement extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: this.props.counter}
        this.decrement = this.decrement.bind(this); //bind the function to the component  
    
    }
    

    decrement() {
        console.log(this.state.counter); // for testing 


        if (this.state.counter > 0) {
             this.setState({
               counter: this.state.counter - 1
             });
        } else {
            alert("Cannot be less then zero");
        }
       
    }
   
    render() {
        return (
           <div className="container">
            <p>{this.state.counter}</p>
            <button onClick={this.decrement} className="btn btn-primary">Decrement</button>
           </div>
        );
    }

}

Decrement.propTypes = {
    counter: PropTypes.number
}

export default Decrement; 