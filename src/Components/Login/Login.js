import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './login.css';

class Login extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col
                        xs={6}
                        sm={6}
                        md={6}
                        lg={6}
                        xl={6}
                    >
                        <div className='backdrop text-center'>
                            <br/>
                            <span className='backdrop-label'>CREATE ACCOUNT</span>
                        </div>
                    </Col>
                    <Col
                        xs={6}
                        sm={6}
                        md={6}
                        lg={6}
                        xl={6}
                    >
                        <Form.Group controlId="validationFormik04" className="password" >
                            <Form.Label className='form-text label'>E-mail or username</Form.Label>
                            <Form.Control
                                required
                                type="text" 
                                name="emailUsername"
                                isInvalid={false}
                                isValid ={false} 
                                className='form-input'
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter an email or username
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="validationFormik04" className="password" >
                            <Form.Label className='form-text label'>Password</Form.Label>
                            <Form.Control
                                required
                                type="password" 
                                name="password"
                                isInvalid={false}
                                isValid ={false} 
                                className='form-input'
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter your password
                            </Form.Control.Feedback>
                        </Form.Group>
                        <br/>
                        <Button className='submitButton form-text'>
                            LOGIN
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;