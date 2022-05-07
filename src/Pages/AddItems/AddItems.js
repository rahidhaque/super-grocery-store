import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItems = () => {
    const [user] = useAuthState(auth);
    const emailRef = useRef();
    const nameRef = useRef();
    const imgRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();
    const supplierRef = useRef();


    const handleAddInventory = (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const description = descriptionRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        const supplierName = supplierRef.current.value;

        const inventory = { email, name, price, description, quantity, supplierName, img };

        fetch('https://arcane-brook-72001.herokuapp.com/inventory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inventory)
        })
            .then(res => res.json())
            .then(data => {
                toast(' Inventory Successfully Added!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                event.target.reset();
            })
    }
    return (
        <div className='container mt-5'>
            <Form onSubmit={handleAddInventory}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='fw-bold'>User Email</Form.Label>
                    <Form.Control ref={emailRef} type="email" value={user?.email} placeholder="Email" readOnly disabled />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='fw-bold'>Grocery Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter grocery" autoComplete='off' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='fw-bold'>Image URL</Form.Label>
                    <Form.Control ref={imgRef} type="text" placeholder="Image Url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='fw-bold'>Description</Form.Label>
                    <Form.Control as="textarea" ref={descriptionRef} rows={3} placeholder="Description of Grocery" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='fw-bold'>Price</Form.Label>
                    <Form.Control type="number" ref={priceRef} placeholder="Price" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='fw-bold'>Quantity</Form.Label>
                    <Form.Control type="number" ref={quantityRef} placeholder="Quantity" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='fw-bold'>Supplier Name</Form.Label>
                    <Form.Control type="text" ref={supplierRef} placeholder="Enter Supplier Name" required />
                </Form.Group>
                <Button variant="danger" type="submit">
                    Add Items
                </Button>
            </Form>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default AddItems;