import React from 'react';
import { Card, CardDeck, Col } from 'react-bootstrap'
import "./box.css";


const ProductCard = ({ listing }) => {

  return (
    <Card style={{ width: "18rem"}} className="box">
      <Card.Img className="img" variant="top" src={listing.image} />
      <Card.Body className="text">
        <Card.Title className="card__title">
          {listing.product}
        </Card.Title>
        <Card.Text className="card__text">

        <p>
        <strong>Number of Reviews: </strong>
        {listing.reviews}
        </p>
        <p>
        <strong>Rating: </strong>
        {listing.rating_int}
        </p>
        <p>
        <strong>Price: $</strong>
        {listing.price}
        </p>

        </Card.Text>
        <Card.Link href={listing.link} >Buy At Amazon</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
