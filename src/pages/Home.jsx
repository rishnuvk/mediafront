import React, { useState } from 'react'
import Add from './Add'
import { Col, Row } from 'react-bootstrap'
import View from './View'
import Categery from './Categery'
import { Link } from 'react-router-dom'

function Home() {

  const[serverRes,setserverRes]=useState({})
const handleresponse=(res)=>{
  setserverRes(res)
}


  return (
    <>

    <h1 className='text-info ms-5 mb-5'>All Video Cards</h1>
    <Link to={'/WatchHistory'} style={{textDecoration:"none",fontSize:"25px",color:"blue"}}>watch history</Link>


<div className='container-fluid'>

  <Row>
     {/* add component selector */}
    <Col lg={1}>
      
      <Add handleresponse={handleresponse}/>
   
    </Col>
    {/* view component selector */}
    <Col lg={7}>
    <View serverRes={serverRes}/>
    
    </Col>
{/* cateegery component selector */}

<Col lg={4}>
<Categery/>
</Col>


  </Row>

</div>


    </>
  )
}

export default Home