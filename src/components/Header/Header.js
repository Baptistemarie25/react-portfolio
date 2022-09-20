import React from 'react'
import "./header.css"
import me from '../../assets/me.jpeg'

function Header() {
    return (
        <header>
        <section className='container'>
            <h1>Marie Baptiste</h1>
            <h3 className='text-dark'>Fullstack Developer</h3>
    
            <div className='me'>
                <img src={me} alt='Portrait of Marie'></img>
            </div>
            <a href='#Contact' className='scroll-down'>Scroll down</a>
        </section>
        </header>
    );
}

export default Header;