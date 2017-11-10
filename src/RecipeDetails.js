import React from 'react';

export default class RecipeDetails extends React.Component {
    constructor(props) {
        super(props);
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(event) {
        const newServingSize = event.target.value;
        this.props.changeServingSize(newServingSize);
    }

    render() {
        return (
            <div className="recipeDetails">
                <h2>{this.props.recipe.recipeName}</h2>
                <h4>Serving Size<input type="text" value={this.props.servingSize} onKeyUp={this.handleUserInput}/></h4>
                <h4>Cooking Time</h4>
                <h4>Difficulty</h4>
            </div>
        )
    }
}