import React from 'react';
import logo from './hubert_logo_color.svg';

const Logo = (props) => {
    return (
        <img width={props.width} height={props.height} src={logo} alt={"logo"} />
    )
};

export default Logo;