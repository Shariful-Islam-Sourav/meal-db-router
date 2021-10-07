import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Image, Row, Button, Spinner } from "react-bootstrap";
import { useHistory, useParams } from "react-router";

const MealDetails = () => {
  const { idMeal } = useParams();
  const history = useHistory();
  const goBackHandler = () => {
    history.push("/meals");
  };
  const [meal, setMeal] = useState({});
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, []);
  return (
    <Container className="my-5">
      {meal.strMealThumb === undefined ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Row>
          <Col sm={8}>
            <Image src={meal.strMealThumb} rounded fluid />
          </Col>
          <Col sm={4}>
            <h3>{meal.strMeal}</h3>
            <p>{meal.strArea}</p>
            <h5 className="mt-3">Ingredients:</h5>
            <h6>-{meal?.strIngredient1}</h6>
            <h6>-{meal?.strIngredient2}</h6>
            <h6>-{meal?.strIngredient3}</h6>
            <h6>-{meal?.strIngredient4}</h6>
            <h6>-{meal?.strIngredient5}</h6>
            <h6>-{meal?.strIngredient6}</h6>
            <p className="mt-3">
              <b>Instructions:</b> {meal.strInstructions}
            </p>
            <a
              className="me-2"
              rel="noreferrer noopener"
              target="_blank"
              href={meal.strYoutube}
            >
              <Button variant="outline-danger">Watch Recipe</Button>
            </a>
            <Button onClick={goBackHandler} variant="outline-success">
              Go Back
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MealDetails;
