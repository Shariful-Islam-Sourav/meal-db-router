import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import { NavLink as AppLink } from "react-router-dom";

const Home = () => {
  return (
    <Container className="mx-auto">
      <h2 className="mt-5 text-center">
        Welcome To Our <span className="text-danger">Meals Mania</span>
      </h2>
     <div className="text-center mt-5">
     <Image
        className="shadow-lg"
        src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/04/GettyImages-675021087_thumb-732x549.jpg"
        fluid rounded
      /> <br />
      <AppLink to="/Meals">
      <Button variant="outline-danger fw-bold mt-5">Find Meals 🍔</Button>{' '}
      </AppLink>
     </div>
    </Container>
  );
};

export default Home;
