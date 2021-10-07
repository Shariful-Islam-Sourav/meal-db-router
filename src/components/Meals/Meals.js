import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container, FormControl, Row, Spinner } from "react-bootstrap";
import Meal from "../Meal/Meal";

const Meals = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);
  const handleSearch = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
  };
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);
  return (
    <Container className="mt-5">
      <FormControl
        type="search"
        placeholder="Search your meal"
        className="me-2 mb-3 w-25"
        aria-label="Search"
        onChange={handleSearch}
      />
      {meals.length === 0 ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Row xs={1} md={3} className="g-4">
          {meals?.map((meal) => (
            <Meal meals={meal} key={meal.idMeal}>Eat Healthy. Live Healthy</Meal>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Meals;
