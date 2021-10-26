import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
  const dispatch = useDispatch()
  // Pulling data from the state
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  // fire off an action (disptach) when the component loads up
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  const renderProducts = () => {
    return products.map((product) => {
      return (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <Product product={product} />
        </Col>
      )
    })
  }
  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>{renderProducts()}</Row>
      )}
    </>
  )
}

export default HomeScreen
