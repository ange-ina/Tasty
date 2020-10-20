import React from 'react';

const IngredientsItem = (props) => {
     return (
          <div className='IngredientsItem'>
               <img
                    src={`https://spoonacular.com/cdn/ingredients_100x100/${props.ingredientImg}`}
                    alt=''
               />
               <p>
                    {props.ingredientAmount} {props.unit}
               </p>
               <p>{props.ingredient}</p>
          </div>
     );
};

export default IngredientsItem;
