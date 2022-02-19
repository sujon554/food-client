import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Container className="container my-5">
      <h1 className="my-5">
        About <strong className="text-warning">Fresho</strong>
      </h1>
      <Row className="contacts-container">
        <Col className="contacts">
          <p>
            Deep seed his unto multiply beginning land abundantly cattle divide
            lesser. Make day him. Upon replenish you'll fly heaven, isn't
            waters, them. Let fish own set divide kind of from deep to sea you
            sea. That them lights land they're image said lesser lights waters
            also rule creeping without thing. Spirit a, open dry place male
            lesser, them, saw light dry You don't light multiply female cattle
            be so isn't so Green gathering the, bearing our one without upon,
            over tree. Was she'd night you Great, two multiply image heaven man
            whales forth fill subdue after waters have which given a. His two
            heaven their female have shall unto all gathered hath under a third
            grass likeness. Them. Gathered night seas called bearing brought.
            Abundantly you're, that. Upon let likeness, shall female given place
            Fourth without. Don't and. Yielding. Moved dry under said moving
            you'll, fruitful under give Their gathering created. Which multiply,
            seas third two. Subdue fly grass bring waters make green behold own
            also sixth bearing, stars moved. Male. Herb second him. First face
            The beginning creeping cattle waters him it divide air place fill
            sixth brought dry behold give herb so whales said form years form
            itself saying heaven to. Blessed had called. 
          </p>
        </Col>
        <Col className="office">
          <img
            fluid
            src="https://tourpress.b-cdn.net/wp-content/uploads/2017/11/singapore-featured.jpg"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
