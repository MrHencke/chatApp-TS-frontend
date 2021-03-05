import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Content from './components/content/Content'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import Background from './components/ui/Background'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import NotFound from './components/ui/NotFound'

const App = () => {
  return (
      <Router>
          <main className='app'>
              <Header />
              <Background />
              <Switch>
                  <Route exact path='/' component={Content} />
                  <Route exact path='/settings' component={Content} />
                  <Route exact path='/chats' component={Content} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/register' component={Register} />
                  <Route path='*' component={NotFound} />
              </Switch>
              <Footer />
          </main>
      </Router>
  )
}

export default App;
