import { useEffect, useState } from "react"

const useToys = () => {
    const [toys,setToys] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=> {
        fetch("https://super-toy-server-neon.vercel.app")
        .then(res => res.json())
        .then(data=> setToys(data))
        setLoading(false);
    },[])
    return[toys,loading]
}

export default useToys;