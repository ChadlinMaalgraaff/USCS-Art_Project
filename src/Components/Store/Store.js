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
            <Container fluid>
                <Row>
                    <Col xs={3} sm={3} md={3} lg={3} xl={3} className='toggle'>
                        <Row>
                            <div className="menu-btn" id='menu-btn' onClick={clicked}>
                                <div className="menu-btn__burger"></div>
                            </div>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className='toggle-content' id='toggle-content'>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='content-item' id='content-item'>
                                        <label class="container">
                                            <p>One</p>
                                            <input type="checkbox"className='checkbox'/>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="container"><p>One</p>
                                            <input type="checkbox"/>
                                            <span class="checkmark"></span>
                                        </label>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{height: '1000vh', minHeight: '1000px'}}>
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