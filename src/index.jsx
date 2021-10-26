import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import User from './user'
import Admin from './admin'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <nav style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Admin links</h2>
        <Link to="/admin/dashboard">Dashboard (admin)</Link>
        <Link to="/admin/settings">Settigns (admin)</Link>
        <Link to="/admin/money">Revenue (admin)</Link>
        <h2>User links</h2>
        <Link to="/user/cart">Cart (user)</Link>
      </nav>
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/user">
          <User />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
