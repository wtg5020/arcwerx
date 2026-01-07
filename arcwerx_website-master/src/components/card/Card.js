import React from 'react';
import Card from 'react-bootstrap/Card';

import './Card.css'

function BasicCard(props) {
    return (
      <Card>
        <Card.Img className='card_logo' variant="top" src={props.logo} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
  export default BasicCard;