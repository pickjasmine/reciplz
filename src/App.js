import React from 'react';
import MenuBar from './MenuBar';
import Recipe from './Recipe';
import {recipes} from './recipeData';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRecipe: "chocolateChipCookies",
            servingSize: "3"
        };
        this.changeServingSize = this.changeServingSize.bind(this);
        this.changeRecipe = this.changeRecipe.bind(this);
    }

    changeServingSize(servingSize) {
        this.setState({
            servingSize: servingSize
        }, function () {
            console.log(this.state.servingSize);
        });
    }

    changeRecipe(recipe) {
        this.setState({
            selectedRecipe: recipe
        }, function () {
            console.log(this.state.recipe);
        });
    }


    render() {
        return (
            <div className="app">
                <header>
                    <MenuBar changeServingSize={this.changeServingSize} changeRecipe={this.changeRecipe} recipes={recipes}/>
                </header>
                <main>
                    <Recipe changeServingSize={this.changeServingSize} servingSize={this.state.servingSize} recipe={recipes[this.state.selectedRecipe]}/>
                </main>
                <footer>

                </footer>
            </div>
        );
    }
}

/*
 App.js => Whole Application
 Menu Bar: static

 Recipe
 Recipe Details: changes depending on user selection on previous page
 Recipe Name
 Serving Size: takes in user input
 Cooking Time
 Difficulty

 Recipe Instructions: changes depending on user selection

 Recipe Ingredients
 Amounts: changes according to user input
 Measurement
 Ingredient NAme


 */