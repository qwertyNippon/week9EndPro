import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MyHome.css'



const MyHome = () => {
    return (
        <Container>
            <Row>
            <Col></Col>
                <Col>
                    <div className='indcardmain'>
                    <Card style={{ width: '48rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>ECOM</Card.Title>
                            <Card.Text>
                            Welcome to our Family
                            </Card.Text>
                            <div className='create homebutdiv'>
                                <Button className='homebut' variant="primary">Login</Button>
                                <Button className='homebut' variant="warning">Sign Up</Button>
                            </div>
                        </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </Container>

    )}

export default MyHome;