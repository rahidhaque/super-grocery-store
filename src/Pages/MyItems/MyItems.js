import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './MyItems.css'

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [inventories, setInventories] = useState([]);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const email = user?.email;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInventoryDelete = (_id) => {
        const url = `http://localhost:5000/inventory/${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = inventories.filter(inventory => inventory._id !== _id);
                    setInventories(remaining);
                }
            })
        setShow(false);
    }
    useEffect(() => {
        const getInventories = async () => {
            const url = `http://localhost:5000/myinventory?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setInventories(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getInventories();
    }, [user]);
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='my-inventories-container'>
                    {
                        inventories.map(inventory => <div key={inventory._id}>

                            <div className="card" style={{ width: '22rem' }}>
                                <img src={inventory.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{inventory.name}</h5>
                                    <h6 className="card-subtitle my-2 text-muted"><span className='fw-bold'>Price: </span>{inventory.price} Tk.</h6>
                                    <h6 className="card-subtitle my-2 text-muted"><span className='fw-bold'>Quantity: </span>{inventory.quantity}</h6>
                                    <h6 className="card-subtitle my-2 text-muted"><span className='fw-bold'>Supplier Name: </span>{inventory.supplierName}</h6>
                                    <p className="card-text">{inventory.description}</p>
                                    <div className='text-center'>
                                        <Button variant="danger" className='my-2' onClick={handleShow}>
                                            Delete
                                        </Button>

                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Deleting</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>Are you sure you want to delete?</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="danger" onClick={() => handleInventoryDelete(inventory._id)}>
                                                    Delete
                                                </Button>
                                                <Button variant="dark" onClick={handleClose}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                </div>
                            </div>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyItems;