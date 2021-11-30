import { Form, Button, Table } from "react-bootstrap";
import { useState, createRef } from 'react';

// forma naudojantis funkcijomis, ref, hooks
export default function AddProduct() {

    //type of data [stateData, stateUpdateFunction] = useState(initialData)
    let initialValue = [];
    const [products, setProduct] = useState(initialValue);
    const formData = createRef();
    //addproduct handler
    const addProduct = (e) => {
        e.preventDefault();
        // kitas būdas paimti values iš formos
        // const formData = e.target;
        // const newProduct = {
        //     productName: formData.productName.value,
        //     productPrice: formData.productPrice.value,
        //     productQuantity: formData.productQuantity.value
        // }

        //  būdas paimti values iš formos su react metodu createRef
        const newProduct = {
            productName: formData.current.productName.value,
            productPrice: formData.current.productPrice.value,
            productQuantity: Number(formData.current.productQuantity.value)
        }
        // add a new product inside products array
        setProduct([...products, newProduct]);
    }
    // increment Quantity by 1
    const incrementQuantity = (e) =>{
        const currentIndex = e.target.value;
        products[currentIndex].productQuantity= products[currentIndex].productQuantity+1;
        setProduct([...products])
    }

    // decrement Quantity by 1
    const decrementQuantity = (e) =>{
        const currentIndex = e.target.value;
        if (products[currentIndex].productQuantity>0){
        products[currentIndex].productQuantity= +products[currentIndex].productQuantity-1;
        setProduct([...products])
        }
    }

    return (
        <div>
            <Form onSubmit={addProduct} ref={formData}>
                <Form.Group className="mb-3" controlId="formBasicProductName">
                    <Form.Label>Product name</Form.Label>
                    <Form.Control type="text" placeholder="Enter product name" name="productName" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Product price</Form.Label>
                    <Form.Control type="number" min="0" step="0.01" precision="2" placeholder="Product price in eur" name="productPrice" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicQuantity">
                    <Form.Label>Product Quantity</Form.Label>
                    <Form.Control type="number" min="0" placeholder="Quantity" name="productQuantity" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add to inventory
                </Button>
            </Form>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Nr.</th>
                        <th>Product name</th>
                        <th>Product price</th>
                        <th>Product Quantity</th>
                        <th>+/-</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.productName}</td>
                                    <td>{item.productPrice}</td>
                                    <td>{item.productQuantity}</td>
                                    <td>
                                            <Button variant="success" onClick={(e)=>incrementQuantity(e)}
                                            value={index} >+</Button>
                                            <Button variant="danger" onClick={(e)=>decrementQuantity(e)}
                                            value={index} 
                                            >-</Button>
                                    </td>
                                </tr>)
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}