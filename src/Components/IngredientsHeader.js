import React from 'react';

const IngredientsHeader = (props) => {
    return (  
        <div className="IngredientsHeader">
            <h6 className="color">Ingredients:</h6>
            <p>Number of servings:</p>
            <div className="counter">
                <button onClick={props.handleMinus}>-</button>
                <h5>{props.counter}</h5>
                <button onClick={props.handlePlus}>+</button>
            </div>
        </div>
    );
}

export default IngredientsHeader;