import React from 'react';
import QRReader from './components/QRReader/QRReader'
import './App.scss';
import Logo from "./components/Logo/Logo";

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
                    <button onClick={() => this.handleScannerClick()}>Scan QR</button>
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
