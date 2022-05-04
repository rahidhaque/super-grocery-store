import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageItem = ({ inventory }) => {
    const { _id, name, img, description, price, quantity, supplierName } = inventory;
    return (
        <div>
            <Table striped bordered hover variant="dark" className='mt-5'>
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{_id}</td>
                        <td className='w-25'>{name}</td>
                        <td className='w-100 d-flex justify-content-center'><img className='img-fluid' src={img} alt="" /></td>
                        <td>{description}</td>
                        <td>{price}</td>
                        <td>{quantity}</td>
                        <td>{supplierName}</td>
                        <td><Link to={`inventory/${_id}`}>
                            <Button className='w-15 rounded my-2' variant='danger'>Update</Button>
                        </Link></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ManageItem;