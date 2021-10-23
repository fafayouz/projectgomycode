import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Blog from './pages/Blog/Blog'
import Service from './pages/services/Service'

const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/التدوينات" component={Blog} />
        <Route exact path="/:slug" component={Service}/>
      </Switch>
    </Router>
    </>
  )
}

export default App
