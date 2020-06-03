import React, {Component} from 'react'





class Decrement extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: this.props.counter}
        this.decrement = this.decrement.bind(this); // bind the component 
    
    }

    decrement() {
        console.log(this.state.counter);
        this.setState({
            counter: this.state.counter - 1
        });
    }
   
    render() {
        return (
           <div>
            <p>{this.state.counter}</p>
            <button onClick={this.decrement}>Decrement</button>
           </div>
        );
    }

}

export default Decrement; 