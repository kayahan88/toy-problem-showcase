import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        };
    }

    handleChange(value){
        this.setState({ userInput: value })
    }

    palindromeChecker(userInput){
        let forwards = userInput;
        let backwards = userInput;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');
        if(forwards === backwards){
            this.setState({ palindrome: 'yes' })
        } else {
            this.setState({ palindrome: 'no' })
        }
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange={( event => this.handleChange(event.target.value ))}/>
                <button className="confirmationButton" onClick={( () => this.palindromeChecker(this.state.userInput) )}> Is it a palindrome? </button>
                <span className="resultsBox">{this.state.palindrome }</span>
            </div>
        )
    }
}
export default Palindrome;

//The palindromeChecker method needs to rewrite the userInput backwards, and then see if it's the same. If it is, let's say, "It is!" If it's not, let's say, "It's not."