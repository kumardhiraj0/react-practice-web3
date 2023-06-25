import { useEffect, useState } from "react";
//google //yahoo
export function useFetch(url) {
    const [data, setData] = useState(null)
    useEffect(()=> {
        fetch(url).then((res)=> {
            return res.json();
        }).then((data)=> {
            setData(data)
        })
    },[url])
    return data;
}