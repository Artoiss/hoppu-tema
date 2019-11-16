import React from 'react';
import { Card } from './components/index';
import {QRReader, Logo, Button} from './components/index'
import './Store.scss';

class Store extends React.Component {
    render() {
        return(
          <div>
          <header className='header-container'>
              <Logo width={'300px'} height={'150px'} />
              <p> future of digital retail </p>
          </header>
            <div className={"cards-container"}>
                <Card
                    image={"https://www.esportspedia.com/streamers/images/6/6f/ScarraNew.png"}
                    name={"Pants"}
                    size={"XL"}
                    price={"60€"}
                    desc={"New red skiing pants, never used."}
                />
                <Card
                    image={"https://www.esportspedia.com/streamers/images/6/6f/ScarraNew.png"}
                    name={"Pants"}
                    size={"XL"}
                    price={"60€"}
                    desc={"New red skiing pants, never used."}
                />

                <Card
                    image={"https://www.esportspedia.com/streamers/images/6/6f/ScarraNew.png"}
                    name={"Pants"}
                    size={"XL"}
                    price={"60€"}
                    desc={"New red skiing pants, never used."}
                />

                <Card
                    image={"https://www.esportspedia.com/streamers/images/6/6f/ScarraNew.png"}
                    name={"Pants"}
                    size={"XL"}
                    price={"60€"}
                    desc={"New red skiing pants, never used."}
                />

                <Card
                    image={"https://www.esportspedia.com/streamers/images/6/6f/ScarraNew.png"}
                    name={"Pants"}
                    size={"XL"}
                    price={"60€"}
                    desc={"New red skiing pants, never used."}
                />

                <Card
                    image={"https://www.esportspedia.com/streamers/images/6/6f/ScarraNew.png"}
                    name={"Pants"}
                    size={"XL"}
                    price={"60€"}
                    desc={"New red skiing pants, never used."}
                />

                <Card
                    image={"https://www.esportspedia.com/streamers/images/6/6f/ScarraNew.png"}
                    name={"Pants"}
                    size={"XL"}
                    price={"60€"}
                    desc={"New red skiing pants, never used."}
                />

            </div>
          </div>
        )
    }
}

export default Store;
