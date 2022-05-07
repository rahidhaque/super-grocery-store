import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventories from '../../../hooks/useInventories';
import Inventory from '../Inventory/Inventory';
import './inventories.css'

const Inventories = () => {
    const [inventories] = useInventories();

    return (
        <div className='container'>
            <div className='row'>
                <h2 className='text-center mt-4'>Our Dealing Inventories</h2>
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
        </div>

    );
};

export default Inventories;