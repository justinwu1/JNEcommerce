import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <main>
        <Header />
        <Container>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/product/:id' exact component={ProductScreen} />
          <Route path='/cart/:id?' exact component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
