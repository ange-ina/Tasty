import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import SearchBarAll from './SearchBarAll';

class Fridge extends Component {
    state = {
        data: [],
        ingredient1: '',
        ingredient2: '',
        ingredient3: '',
        ingredient4: '',
        ingredient5: '',
        apiUrl: ''
    }
    handleUpdate1 = (e) => {
        this.setState({ ingredient1: e.target.value });
    }
    handleUpdate2 = (e) => {
        this.setState({ ingredient2: e.target.value });
    }
    handleUpdate3 = (e) => {
        this.setState({ ingredient3: e.target.value });
    }
    handleUpdate4 = (e) => {
        this.setState({ ingredient4: e.target.value });
    }
    handleUpdate5 = (e) => {
        this.setState({ ingredient5: e.target.value });
    }
    handleSelect = (event) => {
        let newUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${this.state.ingredient1},+${this.state.ingredient2},+${this.state.ingredient3}&ranking=1&apiKey=adc6b8b2a9dd4856a79419fdcec21e21`
        fetch(newUrl)
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json });
            })
        event.preventDefault()
    }
    render() {
        return (
            <div className="Fridge">
                <SearchBarAll />
                <h3 className='middleHeader'>Select the Ingredients in your fridge</h3>
                <form action="" className='middle'>
                    <select name="" onChange={this.handleUpdate1}>
                        <option value=""></option>
                        <option value="tomatoes">Tomatoes</option>
                        <option value="salad">Salad</option>
                        <option value="beef">Beef</option>
                        <option value="chicken">Chicken</option>
                        <option value="pork">Pork</option>
                        <option value="potatoes">Potatoes</option>
                        <option value="pasta">Pasta</option>
                        <option value="rice">Rice</option>
                        <option value="bellpeppers">Bell Peppers</option>
                        <option value="zucchini">Zucchini</option>
                        <option value="eggs">Eggs</option>
                    </select>
                    <select name="" onChange={this.handleUpdate2}>
                        <option value=""></option>
                        <option value="tomatoes">Tomatoes</option>
                        <option value="salad">Salad</option>
                        <option value="beef">Beef</option>
                        <option value="chicken">Chicken</option>
                        <option value="pork">Pork</option>
                        <option value="potatoes">Potatoes</option>
                        <option value="pasta">Pasta</option>
                        <option value="rice">Rice</option>
                        <option value="bellpeppers">Bell Peppers</option>
                        <option value="zucchini">Zucchini</option>
                        <option value="eggs">Eggs</option>
                    </select>
                    <select name="" onChange={this.handleUpdate3}>
                        <option value=""></option>
                        <option value="tomatoes">Tomatoes</option>
                        <option value="salad">Salad</option>
                        <option value="beef">Beef</option>
                        <option value="chicken">Chicken</option>
                        <option value="pork">Pork</option>
                        <option value="potatoes">Potatoes</option>
                        <option value="pasta">Pasta</option>
                        <option value="rice">Rice</option>
                        <option value="bellpeppers">Bell Peppers</option>
                        <option value="zucchini">Zucchini</option>
                        <option value="eggs">Eggs</option>
                    </select>
                    <select name="" onChange={this.handleUpdate4}>
                        <option value=""></option>
                        <option value="tomatoes">Tomatoes</option>
                        <option value="salad">Salad</option>
                        <option value="beef">Beef</option>
                        <option value="chicken">Chicken</option>
                        <option value="pork">Pork</option>
                        <option value="potatoes">Potatoes</option>
                        <option value="pasta">Pasta</option>
                        <option value="rice">Rice</option>
                        <option value="bellpeppers">Bell Peppers</option>
                        <option value="zucchini">Zucchini</option>
                        <option value="eggs">Eggs</option>
                    </select>
                    <select name="" onChange={this.handleUpdate5}>
                        <option value=""></option>
                        <option value="tomatoes">Tomatoes</option>
                        <option value="salad">Salad</option>
                        <option value="beef">Beef</option>
                        <option value="chicken">Chicken</option>
                        <option value="pork">Pork</option>
                        <option value="potatoes">Potatoes</option>
                        <option value="pasta">Pasta</option>
                        <option value="rice">Rice</option>
                        <option value="bellpeppers">Bell Peppers</option>
                        <option value="zucchini">Zucchini</option>
                        <option value="eggs">Eggs</option>
                    </select>
                    <button onClick={this.handleSelect}>Submit</button>
                </form>
                <div id="category">
                    {this.state.data.map((elt, i) =>
                        <CategoryItem
                            key={elt.id}
                            id={elt.id}
                            url={elt.image}
                            title={elt.title}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default Fridge;