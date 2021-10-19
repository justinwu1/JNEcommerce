import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Row,Col,Image,ListGroup,Card,Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'

const ProductScreen = ({match}) => {
    const [product,setProduct] = useState([])
    useEffect(()=>{
        const fetchProducts = async()=>{
            const { data } = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }
        fetchProducts()
    },[match])
    return (
        <>
          <Link className="btn btn-light my-3" to="/">
            Go back
          </Link>
          <Row>
              <Col md={6}>
                <Image src={product.image} alt={product.name}/>
              </Col>
              <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>{product.name}</h2>
                    </ListGroup.Item>
                    <ListGroupItem>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                    </ListGroupItem>
                    <ListGroupItem>
                        Price: ${product.price}
                    </ListGroupItem>
                    <ListGroupItem>
                        Description: ${product.description}
                    </ListGroupItem>
                </ListGroup>
              </Col>
              <Col md={3}>
                  <Card>
                      <ListGroup>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    <strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                                <Row>
                                    <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                                        Add to Cart
                                    </Button>
                                </Row>
                        </ListGroupItem>
                      </ListGroup>
                  </Card>
              </Col>
          </Row>
        </>
    )
}

export default ProductScreen
