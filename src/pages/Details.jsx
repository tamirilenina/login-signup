import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios';
const Details = () => {
    const { pid } = useParams();
    const [pInfo, setPInfo] = useState({});

    useEffect(()=>{
        axios.get('https://dummyjson.com/products/${pid}')
           .then((response) => setPInfo(response.data))
    },[])

    console.log(pInfo)
    return (
        <div>
           <h1>{pInfo.title}</h1>
        </div>
    )
}

export default Details