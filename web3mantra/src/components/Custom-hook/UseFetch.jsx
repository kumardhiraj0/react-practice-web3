import { useEffect, useState } from 'react'

const UseFetch = (url) => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        const fetchData = async ()=>{
            const call =  await fetch(url);
            const res = await call.json();
            setData(res);
        }
        fetchData();
    },[])
  return (
    [data]
  )
}

export default UseFetch;