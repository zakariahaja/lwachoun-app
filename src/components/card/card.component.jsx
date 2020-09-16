import React from "react";

import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.amza.id}?set=set5&size=180x180`} alt={`monster${props.amza.name}`}/>
        <h2>{props.amza.name}</h2>
        <p>{props.amza.email}</p>
    </div>
);