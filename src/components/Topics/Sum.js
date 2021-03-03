import React, { Component } from 'react';

class Sum extends Component {
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange1(value){
        this.setState({ number1: value })
    }

    handleChange2(value){
        this.setState({ number2: value })
    }

    addNums(number1, number2){
        let newSum = Number(number1) + Number(number2);
        this.setState({ sum: newSum })
    }


    render(){
        return (
            <div className="puzzleBox sumPB">
                <h4> Sum </h4>
                <input className="inputLine" onChange={event => this.handleChange1(event.target.value)}/>
                <input className="inputLine" onChange={event => this.handleChange2(event.target.value)}/>
                <button className="confirmationButton" onClick={ () => this.addNums(this.state.number1, this.state.number2)}> Add </button>
                <span className="resultsBox"> Sum: {this.state.sum}</span>
            </div>
        )
    }
    
}

export default Sum;