import React from 'react'
import { Row,Col } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'

const HomeScreen = () => {
    const renderProducts = ()=>{
        return  products.map(product =>{ 
            return(
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            )
        })
    }  
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {renderProducts()}
            </Row>   
        </>
    )
}

export default HomeScreen
