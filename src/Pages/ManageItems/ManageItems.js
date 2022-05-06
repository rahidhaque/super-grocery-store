import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';
import ManageItem from '../ManageItem/ManageItem';

const ManageItems = () => {
    const [inventories] = useInventories();
    return (
        <div className='mt-2'>
            {
                inventories.map(inventory => <ManageItem
                    key={inventory._id}
                    inventory={inventory}
                ></ManageItem>)
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