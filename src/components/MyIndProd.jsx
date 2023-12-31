import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './MyIndProd.css'

const MyIndProd = () => {
    return (
        <Container>
            <Row>
            <Col></Col>
                <Col>
                    <div className=''>
                        <div className='indcardmain '>
                    <Card style={{ width: '21rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>product</Card.Title>
                        <Card.Text>
                            <p>words desc</p>
                            <p>words desc</p>
                            <p>words desc</p>
                        </Card.Text>
                            <div className='create indbutdivq'>
                                <span><Button className="m-3" variant="secondary" > - 1 </Button></span>
                                <span className="quan">Quantity</span>
                                <span><Button className="m-3" variant="info" > + 1 </Button></span>
                            </div>
                        <div>
                            <div className='create indbutdiv'>
                                <Button className='indbut' variant="primary">Add to Cart</Button>
                                <Button className='indbut' variant="danger">Delete</Button>
                            </div>
                        </div>
                    </Card.Body>
                    </Card>
                </div> 
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </Container>

    )}

export default MyIndProd;