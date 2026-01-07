import Nav from 'react-bootstrap/Nav';
import './Footer.css';
import cr_logo from '../../images/corsair_ranch.svg';
import afwerx_logo from '../../images/afwerx.ico';
import nsin_logo from '../../images/nsin.ico';
import sbir_logo from '../../images/AFSBIRSTTR_fav.ico';
import React from 'react';


function Footer() {
  return (
    <Nav className="Footer">
    <Nav.Item>
        <Nav.Link disabled>
        QUICKLINKS:
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="https://www.afwerx.af.mil/"><img src={afwerx_logo} alt='' className='logo' /> AFWERX</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="https://corsairranch.dso.mil/"><img src={cr_logo} alt='' className='logo' /> Corsair Ranch</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="https://www.afsbirsttr.af.mil/Program/Overview/"><img src={sbir_logo} alt='' className='logo' /> SBIR STTR</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="https://www.nsin.us/problem-intake-form/"><img src={nsin_logo} alt='' className='logo' /> NSIN</Nav.Link>
    </Nav.Item>
    </Nav>
  );
}

export default Footer;