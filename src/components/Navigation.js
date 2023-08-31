import React from 'react';

const styles = {
    navBarStyle: {
    //   background: '#287253',
    },
    navTabStyle: {
        padding: '10px',
        display: 'inline',
        fontSize: '20px',
    },
    navAttributeStyle: {
        textDecoration: 'none',
        color: 'black',
    }

  };

export default function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul style={styles.navBarStyle} className="nav nav-tabs">
            <li style={styles.navTabStyle} className="nav-item">
                <a
                    style={styles.navAttributeStyle}
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    // This is a ternary operator. It checks if the value of 'currentPage' is equal to 'Home'. If true, it assigns the value 'nav-link active' to the className, indicating that the tab should be active. Otherwise, it assigns the value 'nav-link', indicating an inactive tab.
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>
            </li>
            <li style={styles.navTabStyle} className="nav-item">
                <a
                    style={styles.navAttributeStyle}
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    // This logic checks if the value of 'currentPage' is equal to 'About'. If true, it assigns the value 'nav-link active' to the className, indicating that the tab should be active. Otherwise, it assigns the value 'nav-link', indicating an inactive tab.
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
            <li style={styles.navTabStyle} className="nav-item">
                <a
                    style={styles.navAttributeStyle}
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    // This logic checks if the value of 'currentPage' is equal to 'Blog'. If true, it assigns the value 'nav-link active' to the className, indicating that the tab should be active. Otherwise, it assigns the value 'nav-link', indicating an inactive tab.
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
            <li style={styles.navTabStyle} className="nav-item">
                <a
                    style={styles.navAttributeStyle}
                    href="#contact"
                    // This logic checks if the value of 'currentPage' is equal to 'Contact'. If true, it assigns the value 'nav-link active' to the className, indicating that the tab should be active. Otherwise, it assigns the value 'nav-link', indicating an inactive tab.
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
        </ul>
    );
}