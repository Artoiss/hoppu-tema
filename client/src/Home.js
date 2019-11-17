import React from 'react';
import {BrowserRouter as Router, Route, Link,
  Redirect, withRouter} from 'react-router-dom'
import App from './App'
import {Button} from './components/index'
import {Logo} from './components/index'

const Home = () => {
  return (
      <div>
      <header className="header-container">
        <Logo width={"300px"} height={"100px"} />
        <p> The future of digital retail </p>
      </header>
      <body className="body-container">
        <p> List your mispurchase in one minute. </p>
      </body >
      </div>
    )
  }



export default Home;
