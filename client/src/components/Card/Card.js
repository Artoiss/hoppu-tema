import React from 'react';
import {default as MUICard} from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
import "./Card.scss";

const Card = (props) => {
    return (
        <MUICard>
            <CardActionArea>
                <CardMedia
                    className={"card-media"}
                    image={"https://cdn.shopify.com/s/files/1/0108/6324/7424/products/descente-stock-ski-pant-2020-orange-1_2000x.jpg"}
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