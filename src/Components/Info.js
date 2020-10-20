import React from 'react';
import like from './like.svg';
const Info = (props) => {
    return (  
        <div className="Details">
                <h3>{props.title}</h3>
                <div className="like">
                    <img src={like} alt=""/>
                    <p>{props.aggregateLikes}</p>
                </div>
                <img src={props.image} alt="" />
                <div className="main">
                    <div className="">
                        <h4>Duration</h4>
                        <h5>{props.readyInMinutes}</h5>
                    </div>
                    <div>
                        <h4>Person</h4>
                        <h5>{props.servings}</h5>
                    </div>
                    <div>
                        <h4>Healthy</h4>
                        <h5>{props.healthScore}</h5>
                    </div>
                    <div>
                        <h4>Price P/P</h4>
                        <h5>{props.pricePerServing} C</h5>
                    </div>
                </div>
            </div>
    );
}

export default Info;