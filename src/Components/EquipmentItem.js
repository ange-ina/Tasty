import React from 'react';

const EquipmentItem = (props) => {
    return (  
        <div className="EquipmentItem">
            <img src={`https://spoonacular.com/cdn/equipment_100x100/${props.image}`} alt="" />
            <p>{props.name}</p>
        </div>
    );
}
 
export default EquipmentItem;