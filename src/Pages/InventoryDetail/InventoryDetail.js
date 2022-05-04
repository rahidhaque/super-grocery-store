import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const InventoryDetail = () => {
    const { _id } = useParams();
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [_id])
    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <div className="card" style={{ width: '22rem' }}>
                <img src={inventory.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{inventory.name}</h5>
                    <h6 className="card-subtitle my-2 text-muted"><span className='fw-bold'>Price: </span>{inventory.price} Tk.</h6>
                    <h6 className="card-subtitle my-2 text-muted"><span className='fw-bold'>Quantity: </span>{inventory.quantity}</h6>
                    <h6 className="card-subtitle my-2 text-muted"><span className='fw-bold'>Supplier Name: </span>{inventory.supplierName}</h6>
                    <p className="card-text">{inventory.description}</p>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetail;