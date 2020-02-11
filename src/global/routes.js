import React from "react";
import {BrowserRouter, Switch,Route} from "react-router-dom"
import CustomerList from '../components/CustomerList'

  const Routes = () => (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <CustomerList />
        </Route>
    </Switch>
    </BrowserRouter>
  )
 
  export default Routes