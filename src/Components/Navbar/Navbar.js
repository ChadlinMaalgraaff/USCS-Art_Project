import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Image, Nav} from 'react-bootstrap';
import './Navbar.css';
import Searchbar from './Searchbar';
import Basket from '../Images/basket.png';
import Rectangle from '../Images/Rectangle.png';

class NavBar extends Component {

    render() {
        return (
            <Navbar expand="lg" className='Navbar' style={{width:'100%'}}>
                <Container>
                    <NavLink to='/'>
                        <Navbar.Brand href="#home">
                            <Image src={Rectangle} style={{width:'40px', height:'40px'}}/>
                            <p className='nav-link' style={{display:'inline-block'}}>
                                ART PROJECT
                            </p>
                        </Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:'white', backgroundColor:'white'}}/>
                    <Navbar.Collapse id="basic-navbar-nav" className='text-center' style={{backgroundColor:'black'}}>
                            <Nav.Item style={{margin:'auto'}}>
                                <p className='text-center' style={{ width:'380px', margin:'auto'}}>
                                    <Searchbar/>
                                </p>
                            </Nav.Item>
                            <Nav.Item style={{margin:'auto'}}>
                                <NavLink to='/'>
                                    <p className='text-white nav-link'>
                                        ARTISTS
                                    </p>
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item style={{margin:'auto'}}>
                                <NavLink to='/'>
                                    <p className='text-white nav-link'>
                                        STORE
                                    </p>
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item style={{margin:'auto'}}>
                                <NavLink to='/'>
                                    <p className='text-white nav-link'>
                                        LOGIN
                                    </p>
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item style={{margin:'auto'}}>
                                <NavLink to='/'>
                                    <p>
                                        <Image src={Basket} style={{width:'35px', height:'30px', marginTop:'15px'}}/>
                                    </p>
                                </NavLink>
                            </Nav.Item>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavBar;