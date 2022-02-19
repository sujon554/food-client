import React, { useEffect, useState } from "react";
import { Card, Col, Container, Button, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const YourOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(
      `http://localhost:5000/myorders?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  //   /Delete Orders
  const deleteHandler = (id) => {
   
    const proceed = window.confirm(
      "Are you sure, you want to delete this package?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/myorders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          
          if (data.deletedCount > 0) {
            const remainingOrders = orders.filter((order) => order._id !== id);
            console.log(remainingOrders);
            setOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <div>
      <Container>
        <h1>My  Food <strong className="text-warning">Order's</strong></h1>
        <h3>Total Orders: {orders.length}</h3>
        <Row className="g-5">
          {orders.map((order) => (
            <Col sm={2} md={4} xl={3} key={order._id} order={order}>
              <Card>
                <Card.Img variant="top" src={order.singleWatchImg} />
                <Card.Body>
                  <Card.Title>{order.singleWatchName}</Card.Title>

                  <Card.Title>{order.singleWatchPrice}</Card.Title>
                  <Card.Title>Booked By</Card.Title>
                  <Card.Title>{order.userName}</Card.Title>
                  <Card.Text className="text-warning">
                    {order.userEmail}
                  </Card.Text>
                  <Button
                    onClick={() => deleteHandler(order._id)}
                    variant="warning"
                    size="sm"
                  >
                    Cancel
                  </Button>
                </Card.Body>

                <Card.Footer>
                  <small className="text-muted text-center">
                    {order.bookedServiceStatus}
                  </small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default YourOrders;
