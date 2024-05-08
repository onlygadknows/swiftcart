import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text=center py-3'>
                    <p>SwiftCart &copy; {currentYear}</p>
                    <p>Created by: Gad Ashell Sususco</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
