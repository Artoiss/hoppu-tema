import React, {useState} from 'react';
import './QRReader.scss';
import QrReader from 'react-qr-reader'
import {Button, Card} from "../index";

const QRReader = (props) => {
    const [result, setResult] = useState(undefined);
    const {showScanner} = props;

    const handleScan = (data) => {
        if (data) {
            setResult(data);
            props.hideScanner()
        }
    };

    const handleError = (error) => {
        console.log(error)
    };

    return (
        <div className={'reader-root'}>
            {showScanner && (
                <QrReader
                    delay={300}
                    onScan={handleScan}
                    onError={handleError}
                />)}
            {result &&
            <div>
                <Card image={"https://cdn.shopify.com/s/files/1/0217/3274/products/pau3053_106_h_940x.jpg?v=1543863314"}
                      name={"Leather shoes,"}
                      size={"42"}
                      price={"15€"}
                      desc={"New unused leather shoes"}/>
                <Button variant={"contained"} color={"primary"}>Sell</Button>
            </div>}
        </div>
    )
};

export default QRReader;