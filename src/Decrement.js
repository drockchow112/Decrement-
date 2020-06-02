import React, {Component} from 'react'



function dec() {
    this.props.counter - 1;
}

class Decrement extends Component {
    render() {
        return (
           <div>
            <p>{this.props.counter}</p>
            <button onClick="{dec}">Decrement</button>
           </div>
        );
    }

}

export default Decrement; 