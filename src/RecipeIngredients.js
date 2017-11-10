import React from 'react';

export default class RecipeIngredients extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const ingredients = this.props.recipe.ingredients;
        const servingSize = this.props.servingSize;

        function convertToFraction(x) {
            var tolerance = 1.0E-6;
            var h1 = 1;
            var h2 = 0;
            var k1 = 0;
            var k2 = 1;
            var b = x;
            do {
                var a = Math.floor(b);
                var aux = h1;
                h1 = a * h1 + h2;
                h2 = aux;
                aux = k1;
                k1 = a * k1 + k2;
                k2 = aux;
                b = 1 / (b - a);
            } while (Math.abs(x - h1 / k1) > x * tolerance);

            if (k1 === 1) {
                return h1;
            }
            else {
                return h1 + "/" + k1;
            }
        }

        return (
            <div className="recipeIngredients">
                <h4>Ingredients</h4>
                <ul>
                    {ingredients.map(function (ingredient) {
                        const adjustedIngredientAmount = convertToFraction(ingredient.amount * servingSize);

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