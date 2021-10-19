import React,{ useState,useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        const fetchProducts = async()=>{
            const { data } = await axios.get('/api/products')
            setProducts(data)
        }
        fetchProducts()
    },[])

    const renderProducts = ()=>{
        return  products.map(product =>{ 
            return(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
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
