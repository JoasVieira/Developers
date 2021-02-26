import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import AllDevs from './pages/AllDevs'
import DetailDev from './pages/DetailDev'
import Home from './pages/Home'
import NewDev from './pages/NewDev'
import UpdateDev from './pages/UpdateDev'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/all/devs" component={AllDevs} />
      <Route path="/detail/dev" component={DetailDev} />
      <Route path="/" exact component={Home} />
      <Route path="/new/dev" component={NewDev} />
      <Route path="/update/dev" component={UpdateDev} />
    </Switch>
  </BrowserRouter>
)

export default Routes
