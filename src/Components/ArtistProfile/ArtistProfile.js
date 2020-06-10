import React, { Component } from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';
import pp from '../Images/default_pp.png';
import './ArtistProfile.css';
import geotag from '../Images/geotag.png';
import tag from '../Images/tag.png';

class ArtistProfile extends Component {

    render() {
        let menuOpen = false;

        const clicked = () => {
            const content = document.getElementById('toggle-content');
            const items = content.getElementsByClassName('content-item');
            const menuBtn = document.getElementById('menu-btn');

            if(!menuOpen) {
                menuBtn.classList.add('open');
                menuOpen = true;
              } else {
                menuBtn.classList.remove('open');
                menuOpen = false;
            } 

            content.classList.toggle("open");
            for (var i = 0; i < items.length; i++) {
                items[i].classList.toggle("fade");
            }
        }

        return (
            <Container fluid style={{ paddingTop:'150px'}}>
                <Row style={{padding:'0px', margin:'0px', width:'100%', paddingBottom:'50px'}}>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{padding:'0px', margin:'0px'}} >
                        <Row style={{paddingBottom:'100px'}}>
                            <Col xs={0} sm={0} md={1} lg={1} xl={1} className='text-center'>
                            </Col>
                            <Col xs={0} sm={0} md={5} lg={4} xl={4} className='text-center'>
                                <Image src={pp} className='pp'></Image>
                            </Col>
                            <Col xs={12} sm={12} md={7} lg={7} xl={7}>
                                <Row style={{paddingTop:'20px'}}>   
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <p className='name'>John Doe</p>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <fieldset class="rating">
                                            <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                                            <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                                            <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                                            <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                                            <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
                                            <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                                            <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                                            <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                                            <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                                            <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                                        </fieldset>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <p className='bio'>Say something about yourself</p>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <div style={{paddingTop:'30px'}}>
                                        <Image src={geotag} className='tags'></Image><p className='tags_label'>Enter location</p>
                                        <Image src={tag} className='tags'></Image><p className='tags_label'>Rate</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} style={{padding:'0px', margin:'0px'}}>
                        <Row style={{padding:'0px', margin:'0px', width:'100%'}}>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{padding:'0px', margin:'0px'}}>
                                <Row style={{padding:'0px', margin:'0px'}}>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <div className='check-heading'>
                                                    + SKILLS
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col> 
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8} style={{padding:'0px', margin:'0px', minHeight:'100vh'}}>
                        
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ArtistProfile;