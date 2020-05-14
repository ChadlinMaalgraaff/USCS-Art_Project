import React, { Component } from 'react';

class Searchbar extends Component {

    render() {
        return (
            <div style={{backgroundColor:'white', borderRadius:'1rem', marginTop:'3px', height:'30px'}}>
                <input className="input-field" type="text" placeholder="" name="usrnm" style={{width:'320px'}}/>
                <i className="fa fa-search icon" style={{color:'black', width:'30px'}}></i>
            </div>
        );
    }
}

export default Searchbar;