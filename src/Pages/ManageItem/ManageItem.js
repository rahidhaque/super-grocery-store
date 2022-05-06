import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';
import './ManageItem.css'

const ManageItem = ({ inventory }) => {
    const { _id, name, img, description, price, quantity, supplierName } = inventory;
    const [show, setShow] = useState(false);
    const [inventories, setInventories] = useInventories();

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
    return (
        <div>
            <Table responsive="lg" striped bordered hover variant="dark" className='large-table-display'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Supplier Name</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{_id}</td>
                        <td className='w-25'>{name}</td>
                        <td><img className='img-fluid' src={img} alt="" /></td>
                        <td>{description}</td>
                        <td>{price}</td>
                        <td>{quantity}</td>
                        <td>{supplierName}</td>
                        <td><Link to={`inventory/${_id}`}>
                            <Button className='w-15 rounded my-2' variant='danger'>Update</Button>
                        </Link></td>
                        <td> <Button variant="danger" className='my-2' onClick={handleShow}>
                            Delete
                        </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Deleting</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Are you sure you want to delete <span className='fw-bold'>{name}</span>? This action cannot be undone!</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="danger" onClick={() => handleInventoryDelete(inventory._id)}>
                                        Delete
                                    </Button>
                                    <Button variant="dark" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal></td>
                    </tr>
                </tbody>
            </Table>

        </div>

    );
};

export default ManageItem;