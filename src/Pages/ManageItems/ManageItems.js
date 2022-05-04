import React from 'react';
import useInventories from '../../hooks/useInventories';
import ManageItem from '../ManageItem/ManageItem';

const ManageItems = () => {
    const [inventories] = useInventories();
    return (
        <div>
            {
                inventories.map(inventory => <ManageItem
                    key={inventory._id}
                    inventory={inventory}
                ></ManageItem>)
            }
        </div>
    );
};

export default ManageItems;