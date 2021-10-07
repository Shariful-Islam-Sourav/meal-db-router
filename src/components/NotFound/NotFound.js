import React from "react";
import { Container, Image } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Image
        className="mt-5"
        src="https://jonkuhrt.files.wordpress.com/2020/01/error-404-message.png"
        fluid
        rounded
      />
    </Container>
  );
};

export default NotFound;
