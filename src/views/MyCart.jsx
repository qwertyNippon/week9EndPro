import { React, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import './MyCart.css'

const MyCart = () => {
    // const { cart, setCart } = useContext(DataContext);
    /*
    The plan:
    1. grab// modify cart ---X
    2. clear the whole cart ---X
    3. clear an ITEM from the cart
    4. increment item ---X
    5. decrement item
    */
//    const clearCart = () => {
//     setCart({size:0, total:0, movies:{}});
//    }
//    const increaseItem = id => {
//     let copyCart = {...cart};
//     console.log(copyCart);
//     copyCart.size ++;

//     copyCart.total += (Math.round(copyCart.movies[id].data.price * 100) / 100);
//     copyCart.movies[id].quantity ++;
//     setCart(copyCart);
//    }
//    const decreaseItem = id => {
//     let copyCart = {...cart};
//     copyCart.size --;
//     copyCart.total -= (Math.round(copyCart.movies[id].data.price * 100) / 100);
//     copyCart.movies[id].quantity > 1 ?
//     copyCart.movies[id].quantity -- :
//     delete copyCart.movies[id];
//     setCart(copyCart);
//    }
//    const removeItem = id => {
//     let copyCart = {...cart};
//     copyCart.size -= copyCart.movies[id].quantity;
//     copyCart.total -= copyCart.movies[id].quantity * (Math.round(copyCart.movies[id].data.price * 100) / 100);
//     delete copyCart.movies[id];
//     setCart(copyCart);
//    }
    return (
        <div>
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
        </div>
    )}

export default MyCart;