import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import SearchBarAll from './SearchBarAll';

class Category extends Component {
     state = {
          data: [],
     };
     componentDidMount() {
          let type = this.props.match.params.type;
          fetch(
               `https://api.spoonacular.com/recipes/complexSearch?type=${type}&apiKey=adc6b8b2a9dd4856a79419fdcec21e21`
          )
               .then((response) => response.json())
               .then((json) => {
                    this.setState({ data: json.results });
               });
     }
     render() {
          return (
               <div className="georg">
                    <SearchBarAll />
                    <div id='category'>
                         {this.state.data.map((elt) => (
                              <CategoryItem
                                   key={elt.id}
                                   id={elt.id}
                                   url={elt.image}
                                   title={elt.title}
                              />
                         ))}
                    </div>
               </div>
          );
     }
}

export default Category;
