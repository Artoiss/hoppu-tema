import React from 'react';
import {default as MUIButton} from '@material-ui/core/Button';

const Button = (props) => {
    return (
        <MUIButton color={props.color} variant={props.variant} onClick={props.onClick} style={{margin: "10px"}}>
            {props.children}
        </MUIButton>
    )
};

export default Button;
