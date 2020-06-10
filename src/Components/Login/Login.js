import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import './login.css';
import Register from '../Register/Register';

class Login extends Component {
    state = {
        show: false
    }

    render() {
        const handleClose = () => {this.setState({show:false}); this.props.close()};
        const handleShow = () => {this.setState({show:true})};

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
                            <a className='backdrop-label' onClick={handleShow}>CREATE ACCOUNT</a>
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
                        </div>
                    </Col>
                </Row>
                <Modal show={this.state.show} size='lg' onHide={handleClose} centered>
                    <Modal.Body style={{backgroundColor:'#ffffff'}}>
                        <Register loginShow={handleShow}/>
                    </Modal.Body>
                </Modal>
            </Container>
        );
    }
}

export default Login;