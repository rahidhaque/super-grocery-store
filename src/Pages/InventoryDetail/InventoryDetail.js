import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './InventoryDetail.css'

const InventoryDetail = () => {
    const { _id } = useParams();
    const [inventory, setInventory] = useState({});
    const [deliver, setDeliver] = useState(0);

    let quantity;
    useEffect(() => {
        const url = `https://arcane-brook-72001.herokuapp.com/inventory/${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [_id]);

    const handleDeliver = () => {
        if (inventory.quantity <= 0) {
            return;
        }
        setDeliver(inventory.quantity--);
        quantity = inventory.quantity;
        const updatedInventory = { quantity };


        const url = `https://arcane-brook-72001.herokuapp.com/inventory/${_id}`;
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

    const handleRestock = (event) => {
        event.preventDefault();

        const stock = event.target.restock.value;
        if (stock < 0) {
            alert('Please Enter a positive value');
            return;
        }
        console.log(stock);
        quantity = inventory.quantity + parseInt(stock);
        const newInventory = { ...inventory, quantity };
        setInventory(newInventory);
        const updatedInventory = { quantity };


        const url = `https://arcane-brook-72001.herokuapp.com/inventory/${_id}`;
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
        event.target.reset();
    }
    return (
        <div className='container align-items-center mx-auto mt-5 update-container'>
            <div className="card card-body-update" style={{ width: '45rem' }}>
                <div className="card-body d-flex justify-content-center align-items-center card-update">
                    <div className='mx-5'>
                        <img src={inventory.img} style={{ width: '200px', height: '170px' }} alt="..." />
                    </div>
                    <div>
                        <h5 className="card-title">{inventory.name}</h5>
                        <h6 className="card-subtitle my-2 text-muted"><span className='fw-bold'>Price: </span>{inventory.price} Tk.</h6>
                        <h6 className="card-subtitle my-2 text-muted"><span className='fw-bold'>Quantity: </span>{inventory.quantity}</h6>
                        <h6 className="card-subtitle my-2 text-muted"><span className='fw-bold'>Supplier Name: </span>{inventory.supplierName}</h6>
                        <p className="card-text">{inventory.description}</p>
                        {
                            inventory.quantity === 0 ? <h4 className='text-danger my-2'>Sold Out</h4> : <h6 style={{ display: 'none' }}>Sold Out</h6>
                        }
                        <div className='text-center'>

                            <Button onClick={handleDeliver} className='w-15 rounded my-2' variant='danger'>Deliver</Button>

                        </div>
                        <form className='mt-5' onSubmit={handleRestock}>
                            <input className='w-100' type="number" name="restock" id="restock" /> <br />
                            <div className='text-center'>
                                <input className='bg-danger mt-2 text-light border border-danger rounded p-2' type="submit" value="Restock" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default InventoryDetail;