import React from 'react';
import {QRReader, Logo, Button} from './components/index'
import './App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showScanner: false
        }
    }

    render() {
        const {showScanner} = this.state;
        return (
            <div className='app-root'>
                <header className='header-container'>
                    <Logo width={'300px'} height={'100px'} />
                    <p> The future of digital retail </p>
                    <p className={'header'}>Scan QR-code from your package.</p>
                    <Button color={'primary'} variant={'contained'} onClick={() => this.handleScannerClick()}>Scan
                        QR</Button>
                </header>
                    <div className={'reader-container'}>
                        <QRReader showScanner={showScanner} hideScanner={() => this.hideScanner()} />
                    </div>
            </div>
        );
    }

    handleScannerClick() {
        this.setState(
            {
                showScanner: !this.state.showScanner
            }
        )
    }

    hideScanner() {
        this.setState({
            showScanner: false
        })
    }
}

export default App;
