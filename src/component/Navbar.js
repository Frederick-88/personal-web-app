import React from 'react';
import './Navbar.css'

class Navbar extends React.Component{
    render(){
        return (
            <div className="topnav">
            <a className="active" href="#">FD TECHNOLOGIES    </a>
            <a href="#skill">Skills</a>
            <a href="#portofolio">Portofolio</a>
            <a href="#footer">Contact</a>
          </div>
        )
    }
}

export default Navbar;