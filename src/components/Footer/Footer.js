import React from 'react'
import '../Footer/Footer.css'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const Footer = () => {
    const [value, setValue] = React.useState(0);

    return (
        <footer>
            <a href='/#' className='footer'>
                Marie baptiste
            </a>
    
            <ul className='links'>
            <li><a href='/#Portfolio'>Portfolio</a></li>
            <li><a href='/#Contact'>Contact</a></li>
            </ul>
    
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            >
                <BottomNavigationAction label="GitHub" 
                icon={<i className="fa-brands fa-github"></i>} 
                href="https://github.com/Baptistemarie25" 
                target="_blank" 
                rel="noopener noreferrer">
                </BottomNavigationAction>

                <BottomNavigationAction label="LinkedIn" 
                icon={<i className="fa-brands fa-linkedin"></i>}
                href="https://www.linkedin.com/in/marie-baptiste-a06b39155/" 
                target="_blank" 
                rel="noopener noreferrer">
                </BottomNavigationAction>

        </BottomNavigation>
        </footer>
    )
}

export default Footer