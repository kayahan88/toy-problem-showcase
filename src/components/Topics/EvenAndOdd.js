import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(value){
        this.setState({ userInput: value })
    }

    assignEvenAndOdds(userInput){
        let newEvenArray = this.state.evenArray.slice()
        let newOddArray = this.state.oddArray.slice()
        let nums = userInput.split(',')
        
        for(let i = 0; i < nums.length; i++){
        
        if(nums[i] %2 === 0){
            newEvenArray.push(nums[i])
        } else {
            newOddArray.push(nums[i])
        }
    }

        this.setState({ evenArray: newEvenArray, oddArray: newOddArray })
    }




    render(){
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4> Evens and Odds </h4>
                <input className="inputLine" onChange={event => this.handleChange(event.target.value)}/>
                <button className="confirmationButton" onClick={ () => this.assignEvenAndOdds(this.state.userInput) }> Split </button>
                <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) }</span>
                <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) }</span>
            </div>
        )
    }
}
export default EvenAndOdd;


// NOTES:

//Element Structure:
// parent div, h4, input, button, span, span