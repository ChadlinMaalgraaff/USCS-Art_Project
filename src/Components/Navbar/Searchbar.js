import React, { Component } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

class Searchbar extends Component {

    render() {
        return (
            <InputGroup className="mb-3" style={{marginTop:'20px'}}>
                <FormControl type="text" placeholder="Search by name or text" className="search text-center" id='searchInput' style={{borderTopLeftRadius:'1.5rem', borderBottomLeftRadius:'1.5rem'}}/>
                <InputGroup.Append>
                <Button className='search-button' style={{width:'100%', borderTopRightRadius:'1.5rem', borderBottomRightRadius:'1.5rem', backgroundColor:'white', borderColor:'white'}}>
                <i className="fa fa-search icon" style={{color:'black', width:'30px'}}></i>
                </Button>
                </InputGroup.Append>
            </InputGroup>
        );
    }
}

export default Searchbar;