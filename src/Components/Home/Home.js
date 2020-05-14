import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Home.css';
import Home1 from '../Images/home_1.jpg';
import Home2 from '../Images/home_2.jpg';
import Home3 from '../Images/home_3.jpg';
import Home4 from '../Images/home_4.jpg';
import Home5 from '../Images/home_5.jpg';
import Home6 from '../Images/home_6.jpg';
import Home7 from '../Images/home_7.jpg';
import Home8 from '../Images/home_8.jpg';
import Home9 from '../Images/home_9.jpg';

class Home extends Component {

    render() {
        return (
            <div>
                <div className='section section-1'>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <p className='section-heading text-center'>THE ART PROJECT</p>
                    <p className='text-center section-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br/>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute<br/>irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla<br/>pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia<br/>deserunt mollit anim id est laborum.
                    </p>
                    <br/><br/>
                </div>
                <div className='section section-2'>
                    <br/><br/><br/>
                    <p className='section-heading text-center'>BROWSE</p>
                    <br/>
                    <Container>
                        <Row>
                            <Col
                                xs={12}
                                sm={12}
                                md={4}
                                lg={4}
                                xl={4}
                            >
                                <Image src={Home1} className='image' style={{width:'100%', height:'300px'}}/>
                                <p className='image-caption text-center' >PAINTING</p>
                            </Col>
                            <Col
                                xs={12}
                                sm={12}
                                md={4}
                                lg={4}
                                xl={4}
                            >
                                <Image src={Home2} className='image' style={{width:'100%', height:'300px'}}/>
                                <p className='image-caption text-center' >DRAWING</p>
                            </Col>
                            <Col
                                xs={12}
                                sm={12}
                                md={4}
                                lg={4}
                                xl={4}
                            >
                                <Image src={Home3} className='image' style={{width:'100%', height:'300px'}}/>
                                <p className='image-caption text-center' >PHOTOGRAPHY</p>
                            </Col>
                            <Col
                                xs={12}
                                sm={12}
                                md={4}
                                lg={4}
                                xl={4}
                            >
                                <Image src={Home4} className='image' style={{width:'100%', height:'300px'}}/>
                                <p className='image-caption text-center' >MIXED MEDIA</p>
                            </Col>
                            <Col
                                xs={12}
                                sm={12}
                                md={4}
                                lg={4}
                                xl={4}
                            >
                                <Image src={Home5} className='image' style={{width:'100%', height:'300px'}}/>
                                <p className='image-caption text-center' >SCULPTURE</p>
                            </Col>
                            <Col
                                xs={12}
                                sm={12}
                                md={4}
                                lg={4}
                                xl={4}
                            >
                                <Image src={Home6} className='image' style={{width:'100%', height:'300px'}}/>
                                <p className='image-caption text-center' >CRAFTS</p>
                            </Col>
                            <Col
                                xs={12}
                                sm={12}
                                md={4}
                                lg={4}
                                xl={4}
                            >
                                <Image src={Home7} className='image' style={{width:'100%', height:'300px'}}/>
                                <p className='image-caption text-center' >CLOTHING/ACCESSORIES</p>
                            </Col>
                            <Col
                                xs={12}
                                sm={12}
                                md={4}
                                lg={4}
                                xl={4}
                            >
                                <Image src={Home8} className='image' style={{width:'100%', height:'300px'}}/>
                                <p className='image-caption text-center' >DIGITAL ART</p>
                            </Col>
                            <Col
                                xs={12}
                                sm={12}
                                md={4}
                                lg={4}
                                xl={4}
                            >
                                <Image src={Home9} className='image' style={{width:'100%', height:'300px'}}/>
                                <p className='image-caption text-center' >OTHER</p>
                            </Col>
                        </Row>
                    </Container>
                    <br/><br/><br/>
                </div>
                <div className='section section-1'>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                    <p className='section-heading text-center'>COMMISSION YOUR FAVOURITE ARTISTS</p>
                    <p className='text-center section-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br/>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute<br/>irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla<br/>pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia<br/>deserunt mollit anim id est laborum.
                    </p>
                    <br/><br/>
                </div>
                <div className='section section-1' style={{backgroundColor:'white'}}>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                    <p className='section-heading text-center'>BECOME A CONTRIBUTER!</p>
                    <p className='text-center section-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br/>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute<br/>irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla<br/>pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia<br/>deserunt mollit anim id est laborum.
                    </p>
                    <br/><br/>
                </div>
            </div>
        );
    }
}

export default Home;