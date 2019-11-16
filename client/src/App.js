import React from 'react';
import './App.scss';
import QRReader from './components/QRReader/QRReader'

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
            <div className='App'>
                <header className='App-header'>
                    <p>Hoppu-App</p>
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
