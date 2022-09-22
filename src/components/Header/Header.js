import React from 'react'
import "../Header/Header.css"
import me from '../../assets/me.jpeg'

function Header() {
    return (
        <header>
        <h1>
            <a href="/">Baptiste Marie W</a>
        </h1>
        <nav>
            <ul>
                <li>
                    <a href="#About-Me">About Me</a>
                </li>
                <li>
                    <a href="#Work">Work</a>
                </li>
                <li>
                    <a href="#Contact-Me">Contact Me</a>
                </li>
                <li>
                    <a href="#Resume">Resume</a>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default Header;