import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../Login/login.css';

class Register extends Component {

    render() {

        return (
        <Container>
            <Row>
                <Col
                    xs={7}
                    sm={7}
                    md={6}
                    lg={6}
                    xl={6}
                    className='rightLine'
                >
                    <div className='backdrop text-center'>
                        <br/>
                        <span className='backdrop-label'>LOGIN</span>
                    </div>
                </Col>
                <Col
                    xs={5}
                    sm={5}
                    md={6}
                    lg={6}
                    xl={6}
                    style={{position:'relative'}}
                >
                    <div className='vertCenter'>
                        <Form.Group controlId="validationFormik04" className="password" >
                            <Form.Label className='form-text label'>Name</Form.Label>
                            <Form.Control
                                required
                                type="text" 
                                name="emailUsername"
                                isInvalid={false}
                                isValid ={false} 
                                className='form-input'
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter your name
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="validationFormik04" className="password" >
                            <Form.Label className='form-text label'>E-mail</Form.Label>
                            <Form.Control
                                required
                                type="text" 
                                name="emailUsername"
                                isInvalid={false}
                                isValid ={false} 
                                className='form-input'
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter your email
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

                        <Form.Group controlId="validationFormik04" className="password" >
                            <Form.Label className='form-text label'>Confirm Password</Form.Label>
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
                            CREATE ACCOUNT
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default Register;