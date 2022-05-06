import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';


const ManageItems = () => {
    const [inventories, setInventories] = useInventories();
    const [show, setShow] = useState(false);

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
        <div className='mt-2'>
            {
                inventories.map(inventory => <div key={inventory._id}>
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
                                <td>{inventory._id}</td>
                                <td className='w-25'>{inventory.name}</td>
                                <td><img className='img-fluid' src={inventory.img} alt="" /></td>
                                <td>{inventory.description}</td>
                                <td>{inventory.price}</td>
                                <td>{inventory.quantity}</td>
                                <td>{inventory.supplierName}</td>
                                <td><Link to={`inventory/${inventory._id}`}>
                                    <Button className='w-15 rounded my-2' variant='danger'>Update</Button>
                                </Link></td>

                                <td><Button variant="danger" className='my-2' onClick={handleShow}>
                                    Delete
                                </Button>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Deleting</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Are you sure you want to delete?</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="dark" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="danger" onClick={() => handleInventoryDelete(inventory._id)}>
                                                Delete
                                            </Button>
                                        </Modal.Footer>
                                    </Modal></td>
                            </tr>
                        </tbody>
                    </Table>

                </div>)
            }
            <div className='text-center'>
                <Link to="/additems">
                    <Button className='w-15 rounded my-2' variant='danger'>Add Items</Button>
                </Link>
            </div>
        </div>
    );
};

export default ManageItems;