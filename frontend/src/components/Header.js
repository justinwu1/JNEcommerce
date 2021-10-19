import React from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap'

const Header = () => {
    return (
    <header>

        <Navbar bg="dark" variant="dark"expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#">JNEcommerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                        className="ms-auto my-2 my-lg-0"
                        >
                        <Nav.Link href="#action1">Cart</Nav.Link>
                        <Nav.Link href="#action2">Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
        </header>
    )
}

export default Header
