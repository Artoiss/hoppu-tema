import React from 'react';
import {default as MUICard} from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
import "./Card.scss";

const Card = (props) => {
    return (
        <MUICard className={"card-root"}>
            <CardActionArea>
                <CardMedia
                    className={"card-media"}
                    image={props.image}
                    title={"cardImage"}
                />
                <CardContent>
                    <div className={"card-header"}>
                        <Typography variant={'h5'}>
                            {props.name + " "}{props.size}
                        </Typography>
                        <Typography variant={'h5'}>
                            {props.price}
                        </Typography>
                    </div>
                    <div className={"card-content"}>
                        <Typography variant={'body2'}>
                            {props.desc}
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </MUICard>
    )
};

export default Card;
