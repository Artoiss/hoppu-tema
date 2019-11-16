import React from 'react';
import { Card } from './components/index'

class Store extends React.Component {
    render() {
        return(
            <div>
                <Card
                    image={"https://www.esportspedia.com/streamers/images/6/6f/ScarraNew.png"}
                    name={"Pants"}
                    size={"XL"}
                    price={"60€"}
                    desc={"New red skiing pants, never used."}
                />
            </div>
        )
    }
}

export default Store;