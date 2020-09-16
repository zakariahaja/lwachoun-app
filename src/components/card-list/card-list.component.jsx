import React from "react";

import './card-list.styles.css';
import {Card} from "../card/card.component";

export const CardList = props => {
    if (props.lwachoun.length > 0) {
        return <div className='card-list'>
            {
                props.lwachoun.map(amza => (<Card key={amza.id} amza={amza}/>))
            }
        </div>
    } else {
        return <div className=''>
            <h2>No Result Found !</h2>
        </div>
    }
}