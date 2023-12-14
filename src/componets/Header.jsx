import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Upload } from 'react-feather';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <>
            <Navbar className="bg-primary">
                <Container>
                    <Navbar.Brand>
                <span className='text-light'>
                    <Link to={'/'} style={{textDecoration:'none',color:'purple'}}>
                    <Upload/><span>video.com</span>
                    </Link>
                 

                </span>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header