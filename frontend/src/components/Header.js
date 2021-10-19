import React from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const Header = () => {
    return (
    <header>

        <Navbar bg="dark" variant="dark"expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>JNEcommerce</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                        className="ms-auto my-2 my-lg-0"
                        >
                        <LinkContainer to="/cart">
                            <Nav.Link href="#action1">Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link href="#action2">Sign In</Nav.Link>
                        </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
        </header>
    )
}

export default Header
