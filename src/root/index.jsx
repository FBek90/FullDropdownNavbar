import React from 'react'
import { Container, Wrapper } from './style'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Contact from '../views/Contact'
import { navItems } from '../utils/navbar'
import Navbar from '../components/Navbar'

function Root() {
  return (
    <Container>
      <Router>
        <Navbar />
        <Switch>
          <Wrapper>
            {navItems.map(({ child }) => {
              return child.map(({ path, component }) => {
                return <Route key={path} path={path} component={component} />
              })
            })}
            <Route path='/contact' component={Contact} />
            <Route exact path='/'>
              <Redirect to='/main' />
            </Route>
          </Wrapper>
        </Switch>
      </Router>
    </Container>
  )
}

export default Root
