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
        function convertMinutesToHours(time) {
            var hours = time / 60;
            var minutes = time % 60;
            var formattedTime = "";
            if (hours < 1) {
                formattedTime = minutes + " minutes";
                return formattedTime;
            }
            else if (minutes === 0) {
                formattedTime = hours + " hours";
                return formattedTime;
            }
            else {
                hours = Math.floor(hours);
                formattedTime = hours + " hours " + minutes + " minutes";
                return formattedTime;
            }
        }

        const formattedPrepTime = convertMinutesToHours(this.props.recipe.prepTimeInMinutes);
        const formattedCookTime = convertMinutesToHours(this.props.recipe.cookTimeInMinutes);

        return (
            <div className="recipeDetails">
                <h2>{this.props.recipe.recipeName}</h2>
                <h4>Serving Size<input type="text" value={this.props.servingSize} onChange={this.handleUserInput}/></h4>
                <h4>Prep Time: {formattedPrepTime}</h4>
                <h4>Cooking Time: {formattedCookTime}</h4>
                <h4>Difficulty: {this.props.recipe.difficultyLevel}</h4>
            </div>
        )
    }
}