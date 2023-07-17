import { React, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import './MyCart.css'

const MyCart = () => {
    const { cart, setCart } = useContext(DataContext);
    /*
    The plan:
    1. grab// modify cart ---X
    2. clear the whole cart ---X
    3. clear an ITEM from the cart
    4. increment item ---X
    5. decrement item
    */
   const clearCart = () => {
    setCart({size:0, total:0, product:{}});
   }
   const increaseItem = id => {
    let copyCart = {...cart};
    console.log(copyCart);
    copyCart.size ++;

    copyCart.total += (Math.round(copyCart.Products[id].data.price * 100) / 100);
    copyCart.Products[id].quantity ++;
    setCart(copyCart);
   }
   const decreaseItem = id => {
    let copyCart = {...cart};
    copyCart.size --;
    copyCart.total -= (Math.round(copyCart.Products[id].data.price * 100) / 100);
    copyCart.Products[id].quantity > 1 ?
    copyCart.Products[id].quantity -- :
    delete copyCart.Products[id];
    setCart(copyCart);
   }
   const removeItem = id => {
    let copyCart = {...cart};
    copyCart.size -= copyCart.Products[id].quantity;
    copyCart.total -= copyCart.Products[id].quantity * (Math.round(copyCart.Products[id].data.price * 100) / 100);
    delete copyCart.Products[id];
    setCart(copyCart);
   }
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <div className=''>
                    <div className='indcardmain'>
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

export default MyCart;