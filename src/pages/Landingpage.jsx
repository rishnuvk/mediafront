import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'




function Landingpage() {


  // function defintion

  // redirect from one page to another page we can use


  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/home')

  }
  return (
    <>
      <Row>
        <Col>
        </Col>




        <Col lg={6}>



          <h1>Welcome video.com</h1>
          <p style={{ textAlign: 'justify' }}>where user can use their favorite videos.User can upload any youtube videos by copy and paste a url into video.com will allow to add and remove theire uploaded videos and also arranged them in different catogaries by drag and drop it is free try it now!!!</p>



          <button onClick={handleNavigate} className='btn btn-success'>Click here to know more</button>
        </Col>




        <Col lg={5}>
          <img className='img-fluid' src="https://www.igeeksblog.com/wp-content/uploads/2021/09/How-to-upload-videos-to-YouTube-from-iPhone-or-iPad.jpg" width={"500px"} alt="no-image" />

        </Col>
      </Row>


    </>
  )
}

export default Landingpage