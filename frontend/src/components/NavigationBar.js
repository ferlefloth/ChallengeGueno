import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavigationBar(){

    return(

        <>
            <Navbar bg="dark" variant="dark">
                
                <Navbar.Brand>
                <img
                        src=""
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        
                    />
                </Navbar.Brand>
                
                <Navbar.Brand href="#home">
                    <div>
                        Güeno Challenge
                    </div>
                </Navbar.Brand>
                
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Consulta tu Info</Nav.Link>
                </Nav>
             
            </Navbar>
           
        </>
    )
}

export default NavigationBar;