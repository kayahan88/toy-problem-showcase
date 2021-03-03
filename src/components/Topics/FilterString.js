import React, { Component } from 'react';

class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            cssColorNames: ['LightCoral', 'LightGoldenRodYellow', 'BlanchedAlmond', 'OldLace', 'OliveDrab', 'Cornsilk', 'CornflowerBlue', 'Gainsboro'],
            userInput: '',
            filteredColors: []
        }
    }

    handleChange(value){
        this.setState({ userInput: value })
    }

    filterString(userInput){
        let myCssColorNames = this.state.cssColorNames;
        let myFilteredColors = [];

        for(let i = 0; i < myCssColorNames.length; i++){
            if(myCssColorNames[i].includes(userInput)){
                myFilteredColors.push(myCssColorNames[i])
            }
        }

        this.setState({ filteredColors: myFilteredColors })
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText">{ JSON.stringify(this.state.cssColorNames, null, 10) }</span>
                <input className="inputLine" onChange={ event => this.handleChange(event.target.value) }/>
                <button className="confirmationButton" onClick={ () => this.filterString(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterStringRB">{ JSON.stringify(this.state.filteredColors, null, 10) }</span>
            </div>
        )
    }
}
export default FilterString;

//The filterString method should see if any of the strings in the cssColorNames array contain the userInput