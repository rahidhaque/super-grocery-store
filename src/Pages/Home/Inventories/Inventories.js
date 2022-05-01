import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import './inventories.css'

const Inventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('inventories.json')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return (
        <div className='container'>
            <div className='row'>
                <h2 className='text-center my-5'>Our Dealing Inventories</h2>
                <div className='inventories-container'>
                    {
                        inventories.map(inventory => <Inventory
                            inventory={inventory}
                        ></Inventory>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Inventories;