import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../components/Rating'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails
  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])

  const renderContents = () => {
    if (loading) {
      return <Loader />
    } else if (error) {
      return <Message variant='danger'>{error}</Message>
    }
    return (
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Price: ${product.price}</ListGroupItem>
            <ListGroupItem>Description: ${product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Button
                    className='btn-block'
                    type='button'
                    disabled={product.countInStock === 0}
                  >
                    Add to Cart
                  </Button>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    )
  }

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go back
      </Link>
      {renderContents()}
    </>
  )
}

export default ProductScreen
