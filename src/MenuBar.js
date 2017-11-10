import React from 'react';

export default class MenuBar extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(recipeKey) {
        this.props.changeRecipe(recipeKey);
    }

    render() {
        const recipes = this.props.recipes;
        const changeRecipe = this.props.changeRecipe;
        return (
            <div className="menu">
                <h1>Reciplz</h1>

                <h2>Browse</h2>
                <ul>
                    {Object.keys(recipes).map((recipeKey) => {
                        return <li onClick={this.handleClick.bind(null, recipeKey)}>{recipes[recipeKey].recipeName}</li>
                    })}
                </ul>

                <h3>Search</h3>
            </div>
        )
    }
}
