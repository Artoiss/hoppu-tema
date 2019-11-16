import React from 'react';
import {BrowserRouter as Router, Route, Link,
  Redirect, withRouter} from 'react-router-dom'
import App from './App'
import Store from './Store'
import {Button, Logo} from './components/index'
import Home from './Home'
const Main = () => {
  return (

      <div>
        <Router>
          <div>
            <div>

            <Link to="/hoppu-tema/sell">
            <Button color={'primary'} variant={'contained'}>
                Sell</Button>
            </Link>

            <Link to="/hoppu-tema/store">
            <Button color={'primary'} variant={'contained'}>
                Store</Button>
            </Link>
            </div>
            <Route exact path="/" render={()=><Home/>}/>
            <Route path="/hoppu-tema/sell" render={() =><App/> }/>
            <Route path="/hoppu-tema/store" render={() =><Store/> }/>
          </div>
        </Router>
      </div>
    )
  }



export default Main;
