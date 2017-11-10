import React from 'react';
import RecipeDetails from './RecipeDetails';
import RecipeInstructions from './RecipeInstructions';
import RecipeIngredients from './RecipeIngredients';


export default class Recipe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="recipe">
                <RecipeDetails changeServingSize={this.props.changeServingSize} servingSize={this.props.servingSize} recipe={this.props.recipe}/>
                <RecipeInstructions recipe={this.props.recipe}/>
                <RecipeIngredients servingSize={this.props.servingSize} recipe={this.props.recipe}/>
            </div>
        )
    }
}