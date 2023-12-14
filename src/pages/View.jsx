import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { getVideo } from '../service/allapi'



// page automaticallyvaran

function View({serverRes}) {


  // to store api responce

  const [allVideos, setallVideos] = useState([])


  const [deleteStatus,setdeletestatus]=useState(false)




  useEffect(() => {
    // call getallvideos

    getallvideos()


  }, [serverRes,deleteStatus])




  // create a function


  const getallvideos = async () => {
    const response = await getVideo()
    //  console.log(response.data);
    setallVideos(response.data)

  }


  console.log(allVideos);

  // to get delete response

  const handleDeletestatus=(res)=>{
    setdeletestatus(res)
  }




  return (
    <>
      <div className='border p-3 rounded'>

        <Row>
          {
            allVideos.map(video=>(

              <Col className='p-3 m-3 ' sm={12} md={5}>

          
              <Videocard  card={video} handleDeletestatus={handleDeletestatus}/>

           

            </Col>

            ))
           
          }
        </Row>

      </div>
    </>
  )
}

export default View


// parent to child relation duplicale(props)
// all print using in map process
