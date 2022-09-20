import React from "react";
import { NavLink } from "react-router-dom"

function Nav() {
    
    return (

        <header className="d-flex justify-content-between">
            <div>
                <h1 className="d-flex align-items-center"><NavLink to="/">Marie Baptiste</NavLink></h1>
                <h6 className="my-title">Fullstack Web Developer</h6>
            </div>
            <nav className="d-flex align-items-center">
                <NavLink className="mx-3" to="/">About Me</NavLink>
                <NavLink className="mx-3" to="/portfolio">Portfolio</NavLink>
                <NavLink className="mx-3" to="/contact">Contact</NavLink>
                <NavLink className="mx-3" to="/resume">Resume</NavLink>
            </nav>
        </header>

    )

}


export default Nav;