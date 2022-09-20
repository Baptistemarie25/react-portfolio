import React from 'react'
import "/Footer/Footer.css"
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer'>
                Marie baptiste
            </a>
    
            <ul className='links'>
            <il><a href='#'>Home</a></il>
            <il><a href='#About'>About</a></il>
            <il><a href='#Experience'>Experience</a></il>
            <il><a href='#Portfolio'>Portfolio</a></il>
            <il><a href='#Contact'>Contact</a></il>
            </ul>
    
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            >
                <BottomNavigationAction label="GitHub" 
                icon={<i class="fa-brands fa-github"></i>} 
                href="https://github.com/Baptistemarie25" 
                target="_blank" 
                rel="noopener noreferrer">
                </BottomNavigationAction>

                <BottomNavigationAction label="LinkedIn" 
                icon={<i class="fa-brands fa-linkedin"></i>}
                href="https://www.linkedin.com/in/marie-baptiste-a06b39155/" 
                target="_blank" 
                rel="noopener noreferrer">
                </BottomNavigationAction>

        </BottomNavigation>
        </footer>
    )
}

export default Footer