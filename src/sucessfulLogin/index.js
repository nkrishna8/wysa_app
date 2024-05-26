import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function LoginSuccess() {
  const dataGlobal = useSelector(state => state);
  return (
    <>
      <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Link to='/'><i class="bi bi-house" style={{ fontSize: '24px', color: '#0084ff', marginLeft:'50px' }}></i></Link><br />
      </section>

      <Container className="mt-5">
        {dataGlobal.adminUserId ? <center><h3>Login Successful as {dataGlobal.adminUserId}</h3></center> : null}<br></br>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/02/36/62/99/240_F_236629968_cvZT3xpLsf26tuvcJOLaU8xIR1GfPrus.jpg" />
              <Card.Body>
                <Card.Title>Harekrishna Mandal</Card.Title>
                <Card.Text>
                  Software Engineer at XYZ Company
                </Card.Text>
                {/* <Button variant="primary">Edit Profile</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <Card>
              <Card.Header>Profile Details</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Full Name:</strong> Harekrishna Mandal
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Email:</strong> harekrishnakn08@gmail.com
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Phone:</strong> +91-7908374351
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Address:</strong> Kharagpur, India
                </ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className="mt-4">
              <Card.Header>Recent Activities</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Completed a project on React</ListGroup.Item>
                <ListGroup.Item>Attended a webinar on Web Development</ListGroup.Item>
                <ListGroup.Item>Started learning Node.js</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
