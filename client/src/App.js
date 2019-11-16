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
                    <Logo width={'300px'} height={'150px'} />
                    <p className={'header'}>Hoppu-App</p>
                    <Button color={'primary'} variant={'contained'} onClick={() => this.handleScannerClick()}>Scan
                        QR</Button>
                </header>
                {showScanner && (
                    <div className={'reader-container'}>
                        <QRReader />
                    </div>)}
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
}

export default App;
