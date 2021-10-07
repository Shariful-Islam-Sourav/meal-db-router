import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Meal = (prop) => {
  const { idMeal, strMeal, strMealThumb, strCategory, strInstructions } =
    prop.meals;
    console.log(prop.children)
  return (
    <Col>
    <h2>{prop.children}</h2>
      <Card className="shadow-lg">
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>{strCategory}</Card.Text>
          <Card.Text>{strInstructions.slice(0, 150)}...</Card.Text>
          <Link to={`/meal/${idMeal}`}>
            <Button variant="danger">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Meal;
