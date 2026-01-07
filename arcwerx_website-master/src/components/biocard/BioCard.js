import Card from 'react-bootstrap/Card';
import React from 'react';
import './BioCard.css'

function card_img_left(props){
  let out = null
  if (!props.align || props.align==='left') {
    out = <Card.Img className='biocard_image' variant="top" src={props.image} alt={props.header} />
  }
  return out
}

function card_img_right(props){
  let out = null
  if (props.align==='right') {
    out = <Card.Img className='biocard_image' variant="top" src={props.image} alt={props.header} />
  }
  return out
}

function BasicCard(props) {
    return (
      <Card>
        {card_img_left(props)}
        <Card.Body>
          <Card.Title>{props.header}</Card.Title>
          {props.text.map(text => (
            <Card.Text key={text.id} >{text}</Card.Text>
          ))}
        </Card.Body>
        {card_img_right(props)}
      </Card>
    );
  }
  
  export default BasicCard;