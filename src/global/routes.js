import React from "react";
import {BrowserRouter, Switch,Route} from "react-router-dom"
import CustomerPage from '../pages/CustomerPage'

  const Routes = () => (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <CustomerPage/>
        </Route>
    </Switch>
    </BrowserRouter>
  )
 
  export default Routes