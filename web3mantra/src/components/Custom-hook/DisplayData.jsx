import React from 'react'
import UseFetch from './UseFetch'
const DisplayData = () => {
   const  [data] = UseFetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001");
  return (
    <div>
        {
            data.map((item,index)=>{
                return (
                    <>
                    <h1 style={{color:"green"}}>Name : {item.firstName}</h1>
                    <p style={{color:"red"}} col>Email: {item.email}</p>
                    </>
                )
            })
        }
       
    </div>
  )
}

export default DisplayData;