import React from 'react';
import {default as MUIButton} from '@material-ui/core/Button';

const Button = (props) => {
    return (
        <MUIButton color={props.color} variant={props.variant} onClick={props.onClick}>
            {props.children}
        </MUIButton>
    )
};

export default Button;