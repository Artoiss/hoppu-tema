import React from 'react';
import {BrowserRouter as Router, Route, Link,
  Redirect, withRouter} from 'react-router-dom'
import App from './App'
import Store from './Store'
import {Button, Logo} from './components/index'

const Main = () => {
  return (

      <div>
        <Router>
          <div>
            <div>

            <Link to="/sell">
            <Button color={'primary'} variant={'contained'}>
                Sell</Button>
            </Link>

            <Link to="/store">
            <Button color={'primary'} variant={'contained'}>
                Store</Button>
            </Link>
            </div>
            <Route path="/sell" render={() =><App/> }/>
            <Route path="/store" render={() =><Store/> }/>
          </div>
        </Router>
      </div>
    )
  }



export default Main;
