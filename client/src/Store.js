import React from 'react';
import {Card, Logo} from './components/index';
import './Store.scss';

class Store extends React.Component {
  render() {
    return (
      <div>
        <header className="header-container">
          <Logo width={"300px"} height={"100px"} />
          <p> The future of digital retail </p>
        </header>
        <div className={"cards-container"}>
          <Card
            image={
              "https://cdn.shopify.com/s/files/1/0108/6324/7424/products/descente-stock-ski-pant-2020-orange-1_2000x.jpg"
            }
            name={"Pants"}
            size={"XL"}
            price={"60€"}
            desc={"New red skiing pants, never used."}
          />
          <Card image={"https://cdn.shopify.com/s/files/1/0217/3274/products/pau3053_106_h_940x.jpg?v=1543863314"}
                name={"Leather shoes,"}
                size={"42"}
                price={"15€"}
                desc={"New unused leather shoes"}/>
            <Card
                image={
                    "https://cdn.shopify.com/s/files/1/0260/7815/0733/products/hat_360x.jpg?v=1573936316"
                  }
                name={"Fedora hat"}
                size={"One size"}
                price={"30€"}
                desc={"Used fedora hat."}
                />
        </div>
      </div>
    );
  }
}


export default Store;
