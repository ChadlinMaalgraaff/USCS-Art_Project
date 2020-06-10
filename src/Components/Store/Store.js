import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './store.css';

class Store extends Component {

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
            <Container fluid style={{padding:'0px', margin:'0px', width:'100%'}}>
                <Row style={{padding:'0px', margin:'0px', width:'100%'}}>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{padding:'0px', margin:'0px'}} >
                        <Row>
                            <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
                            <Col xs={12} sm={12} md={11} lg={11} xl={11}>
                                <div>
                                    <p className='search-text'>{'"' + 'Nature' + '" '}</p><p className='result-text'>{'200' + ' SEARCH RESULTS'}</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4} style={{padding:'0px', margin:'0px'}} className='toggle'>
                        <div className="menu-btn" id='menu-btn' onClick={clicked}>
                            <div className="menu-btn__burger"></div>
                        </div>
                        <Row className='side-row' style={{padding:'0px', margin:'0px', width:'100%', borderWidth:'0px', borderRightColor:'#CBE7FF', borderRightWidth:'3px', borderStyle:'solid'}}>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{padding:'0px', margin:'0px'}} className='toggle-content' id='toggle-content'>
                                <Row className='toggle-row' style={{padding:'0px', margin:'0px'}}>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <div className='check-heading'>
                                                    CATEGORY
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>    
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <label class="container">
                                                    <p>Painting</p>
                                                    <input type="checkbox"className='checkbox'/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <label class="container">
                                                    <p>Drawing</p>
                                                    <input type="checkbox"className='checkbox'/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <label class="container">
                                                    <p>Photography</p>
                                                    <input type="checkbox"className='checkbox'/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <label class="container">
                                                    <p>Mixed Media</p>
                                                    <input type="checkbox"className='checkbox'/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <label class="container">
                                                    <p>Sculpture</p>
                                                    <input type="checkbox"className='checkbox'/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <label class="container">
                                                    <p>Crafts</p>
                                                    <input type="checkbox"className='checkbox'/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <label class="container">
                                                    <p>Clothing/Accessories</p>
                                                    <input type="checkbox"className='checkbox'/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <label class="container">
                                                    <p>Digital Arts</p>
                                                    <input type="checkbox"className='checkbox'/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <label class="container">
                                                    <p>Other</p>
                                                    <input type="checkbox"className='checkbox'/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <div className='check-heading'>
                                                    PRICE RANGE
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                            <div id="slider-range" className='slider-range'></div>
                                            <p>
                                                <input type="text" id="amount" readonly/>
                                            </p>
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <div className='check-heading'  style={{marginBottom:'0px'}}>
                                                    USER RATING
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={0} sm={0} md={0} lg={3} xl={3}></Col>
                                            <Col xs={12} sm={12} md={12} lg={9} xl={9}>
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
                                        </Row>
                                    </Col>

                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <div className='check-heading'>
                                                    CATEGORY
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>    
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <label class="container">
                                                    <p>Red</p>
                                                    <input type="checkbox"className='checkbox'/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <label class="container">
                                                    <p>Orange</p>
                                                    <input type="checkbox"className='checkbox'/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <label class="container">
                                                    <p>Yellow</p>
                                                    <input type="checkbox"className='checkbox'/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <label class="container">
                                                    <p>Green</p>
                                                    <input type="checkbox"className='checkbox'/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <label class="container">
                                                    <p>Blue</p>
                                                    <input type="checkbox"className='checkbox'/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <div className='check-heading'>
                                                    CATEGORY
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>    
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <label class="container">
                                                    <p>Anywhere</p>
                                                    <input type="checkbox"className='checkbox'/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <label class="container">
                                                    <p>Stellenbosch, SA</p>
                                                    <input type="checkbox"className='checkbox'/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <label class="container">
                                                    <p>South Africa</p>
                                                    <input type="checkbox"className='checkbox'/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <label class="container">
                                                    <input type="checkbox"className='checkbox'/>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <input type="text" className='location' placeholder='Enter your location'/>
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <div className='check-heading'>
                                                    DELIVERED WITHIN
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>    
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <label class="container">
                                                    <p>2-3 days</p>
                                                    <input type="checkbox"className='checkbox'/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <label class="container">
                                                    <p>1 week</p>
                                                    <input type="checkbox"className='checkbox'/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <label class="container">
                                                    <p>2 weeks</p>
                                                    <input type="checkbox"className='checkbox'/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <Row>
                                            <Col xs={1} sm={1} md={1} lg={3} xl={3}></Col>
                                            <Col xs={11} sm={11} md={11} lg={9} xl={9}>
                                                <label class="container">
                                                    <p>1 month</p>
                                                    <input type="checkbox"className='checkbox'/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Store;