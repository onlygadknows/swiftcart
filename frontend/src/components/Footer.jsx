import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../assets/styles/custom_css.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text=center py-3'>
                    <div className='footer'>
                    <p>SwiftCart &copy; {currentYear}</p>
                    <p>Created by: Gad Ashell Sususco</p>
                    </div>

                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
