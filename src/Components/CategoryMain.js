import React from 'react';
import {
    Link
} from "react-router-dom";

const CategoryMain = (props) => {
    return (  
        <div>
            <Link to={`/categories/${props.type}`}>
                <div className="type">
                    <img src={props.url} alt="" />
                    <h1>{props.title}</h1>
                </div>
            </Link>
        </div>
    );
}

export default CategoryMain;
