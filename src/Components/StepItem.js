import React from 'react';
import './StepItem.css';

const StepItem = (props) => {
     return (
          <div className='Steps'>
               <h6 className='BorderNumber'>{props.stepNumber}</h6>
               <p>{props.step}</p>
          </div>
     );
};

export default StepItem;
