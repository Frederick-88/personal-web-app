import React from 'react';
import './Navbar.css'

class Navbar extends React.Component{
    render(){
        return (
            <div className="topnav">
            <a className="active" href="#">Chen Frederick's Personal Website    </a>
            <a href="#skill">Skills</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
          </div>
        )
    }
}

export default Navbar;