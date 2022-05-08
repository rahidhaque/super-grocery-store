import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import Inventory from '../Inventory/Inventory';
import './inventories.css'

const Inventories = () => {
    const [loading, setLoading] = useState(true);
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        const fetchInventory = async () => {
            setLoading(true);
            await fetch('https://arcane-brook-72001.herokuapp.com/inventory')
                .then(res => res.json())
                .then(data => setInventories(data));
            setLoading(false);
        }
        fetchInventory();
    }, [])



    return (
        <div className='container'>
            <h2 className='text-center my-5'>Our Dealing Inventories</h2>
            {loading ? <Loading></Loading> : <div className='row'>
                <div className='inventories-container my-2'>
                    {
                        inventories.slice(0, 6).map(inventory => <Inventory
                            key={inventory._id}
                            inventory={inventory}
                        ></Inventory>)
                    }
                </div>
                <div className='text-center'>
                    <Link to="/manageitems">
                        <Button className='w-15 rounded my-2' variant='danger'>Manage Inventories</Button>
                    </Link>
                </div>
            </div>
            }

        </div>

    );
};

export default Inventories;