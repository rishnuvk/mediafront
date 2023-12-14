import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getHistory } from '../service/allapi';


function Watchhistory() {
  const[history,sethistory]=useState([])

  useEffect(() => {
    getWatchhistory()
  
    
  }, [])
  

const getWatchhistory=async()=>{
 const {data}= await getHistory()
 sethistory(data)

}
console.log(history);

  return (
    <div>
            <Table className='table-shadow m-3 rounded border' >
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>URL</th>
            <th>DATA</th>
            
          </tr>
        </thead>
        <tbody>
{


  history?.map((item, index)=>(

    <tr>
    <td>{index+1}</td>
    <td>{item?.categoryname}</td>
    <td>{item?.url}</td>
    <td>{item?.date}</td>
   
    
  </tr>
  

  ))
}



        </tbody>
      </Table>
      
    </div>
  )
}

export default Watchhistory