import React from 'react';
import { Button } from 'react-bootstrap';
import './Inventory.css'

const Inventory = ({ inventory }) => {
    const { name, img, description, price, quantity, supplierName } = inventory;
    return (
        <div>
            <div className="card" style={{ width: '22rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle my-2 text-muted"><span className='fw-bold'>Price: </span>{price} Tk.</h6>
                    <h6 className="card-subtitle my-2 text-muted"><span className='fw-bold'>Quantity: </span>{quantity}</h6>
                    <h6 className="card-subtitle my-2 text-muted"><span className='fw-bold'>Supplier Name: </span>{supplierName}</h6>
                    <p className="card-text">{description}</p>
                    <div className='text-center'>
                        <Button variant='danger'>Update</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;