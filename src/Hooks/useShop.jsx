import { useEffect, useState } from "react";


const useShop = () => {
    const [shop, setShop] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        fetch("http://localhost:5000/userShop")
        .then(res => res.json())
        .then(data => {
            setShop(data);
            setLoading(false)
        });
    }, [])
    return [shop, loading]
};

export default useShop;