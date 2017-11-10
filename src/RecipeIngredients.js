import React from 'react';

export default class RecipeIngredients extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const ingredients = this.props.recipe.ingredients;
        const servingSize = this.props.servingSize;


        return (
            <div className="recipeIngredients">
                <h4>Ingredients</h4>
                <ul>
                    {ingredients.map(function (ingredient) {
                        const adjustedIngredientAmount = ingredient.amount * servingSize;

                        return (
                            <li>{
                                adjustedIngredientAmount + " " +
                                ingredient.unitOfMeasure + " " +
                                ingredient.description}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}