import React from 'react';
import Nestedprops from './nestedprops';

function Child (props)
{
    return(
        <div>
            <h1 style={{color:"red  "}}>
                MY SKILL.....:{props.myskill}
                <Nestedprops location=" CHENNAI , BANGALORE , NOW POMBUR"></Nestedprops>
            </h1>
        </div>
    )
}
export default Child;