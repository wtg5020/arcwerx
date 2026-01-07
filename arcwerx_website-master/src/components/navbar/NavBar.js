import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

function NavBar() {

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">            
          <img
            src="/lightbulb_gear.svg"
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="ARCWERX"
          />
        </Navbar.Brand>
       
      </Container>
    </Navbar>
  );
}

export default NavBar;