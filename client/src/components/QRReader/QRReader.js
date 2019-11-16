import React, {useState} from 'react';
import QrReader from 'react-qr-reader';
import './QRReader.scss';

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
            {result && <p className={'reader-result'}>{result}</p>}
        </div>
    )
};

export default QRReader;