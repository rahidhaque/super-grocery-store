import { useEffect, useState } from "react";
import Loading from "../Pages/Shared/Loading/Loading";

const useInventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {

        fetch('https://arcane-brook-72001.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventories(data))

    }, [])
    return [inventories, setInventories];
}

export default useInventories;