import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const InventoryDetail = () => {
    const { _id } = useParams();
    const [inventory, setInventory] = useState({});
    const [deliver, setDeliver] = useState(0);
    let quantity;
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [_id]);
    const handleDeliver = () => {
        if (inventory.quantity === 0) {
            return;
        }
        setDeliver(inventory.quantity--);
        quantity = inventory.quantity;
        const updatedInventory = { quantity };
        console.log(updatedInventory);
        const url = `http://localhost:5000/inventory/${_id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedInventory),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            });
    }
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
                    {
                        inventory.quantity === 0 ? <h4 className='text-danger my-2'>Sold</h4> : <h6 style={{ display: 'none' }}>Sold</h6>
                    }
                    <div className='text-center'>

                        <Button onClick={handleDeliver} className='w-15 rounded my-2' variant='danger'>Deliver</Button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetail;