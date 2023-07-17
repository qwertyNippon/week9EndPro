import { useContext, useEffect, useState } from "react"
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { DataContext } from "../context/DataProvider";

const MyShop = () => {
    useEffect(() => { console.log('SHOP component state has been rendered or re-rendered') });


    /*
    1. make api call to flask ---X
    2. set state for our component for products ---X
    2. get products from api call and set state ----X
    3. render on the page!
    */
    // async/await

    const getProductData = async () => {
        let response = await axios.get('http://127.0.0.1:5000/api/api');
        return response.status === 200 ? response.data : null
    }
    const loadProductData = async () => {
        let data = await getProductData();
        console.log(data)
        setProduct(data.Product);
    }
    const [Product, setProduct] = useState(() => loadProductData());
    console.log(Product);

    const { cart, setCart } = useContext(DataContext);


    const addProduct = (Product) => {
        // make a copy
        let copyCart = { ...cart };
        // change the copy
        copyCart.size++;
        copyCart.total += (Math.round(Product.price * 100) / 100);
        copyCart.Product[Product.name] ?
            copyCart.Product[Product.name].quantity++
            :
            copyCart.Product[Product.name] = { data: Product, quantity: 1 };
        console.log(copyCart);
        // set state
        setCart(copyCart);
    }
    return (
        <div>
            <h1>Shop Page</h1>
            <div className="container">
                <div className="row">
                    {console.log(Product, typeof Product)}
                    {Product && Product.length > 0 ? Product.map((p, index) => {
                        return <Card key={index} style={{ width: '13rem' }}>
                            <Card.Img variant="top" src={Product.img} />
                            <Card.Body>
                                <Card.Title>{Product.name}</Card.Title>
                                <Card.Text>
                                    '{Product.name} is made for quality'
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Price: ${Product.price}</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                            </Card.Body>
                            <Card.Body>
                                <Button variant="success" onClick={() => addProduct(p)}>Add to cart</Button>
                            </Card.Body>

                        </Card>
                    }) :
                        <Card>
                            <Card.Header>Sorry!</Card.Header>
                            <Card.Body>
                                <div>
                                    <p>
                                        Sorry malfunction.
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    }
                </div>
            </div>
        </div>
    )
}
export default MyShop;