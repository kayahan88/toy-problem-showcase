import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            foodArray: [
                {
                    food: 'donuts',
                    brand: 'Hostess',
                    calories: 500
                },
                {
                    food: 'mac n cheese',
                    brand: 'Kraft',
                    color: 'yellow-orange',
                },
                {
                    food: 'granola bar',
                    price: 1.5
                }
            ],

            userInput: '',
            filteredFood: []
        }
    }

    handleChange(value){
        this.setState({ userInput: value })
    }

    filterFood(userInput){
        let food = this.state.foodArray;
        let myFilteredFood = [];

        for(let i = 0; i < food.length; i++){
            if(food[i].hasOwnProperty(userInput)){
                myFilteredFood.push(food[i])
            }
        }
        this.setState({ filteredFood: myFilteredFood })
    }
    
    
    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.foodArray, null, 10) } </span>
                <input className="inputLine" onChange={event => this.handleChange(event.target.value)}/>
                <button className="confirmationButton" onClick={ () => this.filterFood(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredFood, null, 10) }</span>
            </div>
        )
    }
}
export default FilterObject;

//The filter method needs to look at the properties of each object in the array, and only return/show the object that contain the property matching the userInput