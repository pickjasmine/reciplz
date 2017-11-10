import React from 'react';

export default class RecipeInstructions extends React.Component {
    render() {
        const recipeInstructions = this.props.recipe.instructions;

        return (
            <div className="recipeInstructions">
                <h4>Instructions</h4>
                <ul>
                    {recipeInstructions.map(function (step) {
                        return <li>{step}</li>
                    })}
                </ul>
            </div>
        )
    }
}