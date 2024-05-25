import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styles.css'
import { useDispatch, useSelector } from 'react-redux';
import { loginActionCreator } from '../reducers/userReducer';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const globalData = useSelector(state => state);

    const [username, setUserame] = useState("");
    const [password, setPassword] = useState('');
    const isValid = username && password;


    const handleLogin = (e) => {
        e.preventDefault();
        console.log('User Name:', username);
        console.log('Password:', password);
        if (globalData.adminUserId === username) {
            navigate('/chat');
        }
        else {
            alert("Invalid Credentials!");
        }
    };

    return (
        <><br></br><br></br>
            <Container fluid>
                <Row>
                    <Col sm={{ offset: 1, span: 10 }} md={{ offset: 3, span: 6 }} lg={{ offset: 4, span: 5 }}>
                        <Card className='p-4 mt-5 effect-shadow'><br></br>
                            <center><h3 style={{color:"#3242a8"}}>Login</h3></center>

                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username:</Form.Label>
                                    <Form.Control type="name" placeholder="Enter Username" onChange={e => setUserame(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
                                </Form.Group>
                                <br></br>
                                <Button variant="outline-success" size="lg" type="submit" disabled={!isValid} onClick={handleLogin}>Login </Button>
                            </Form>
                            <br></br>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>


    );
};

export default Login;
