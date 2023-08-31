import React, { useState } from 'react';
import Navigation from './Navigation';

// import pages
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

const styles = {
    headerStyle: {
        display: 'flex',
        alignItems: 'top',
        justifyContent: 'space-between',
        marginRight: '20px',
        marginLeft: '20px',
        flexBasis: 'auto',
        // background: '#287253',
    },
    navTabStyle: {
        padding: '10px',
        display: 'inline',
        fontSize: '20px'
    },
    pageStyle: {
        // display: 'flex'
    }
};

export default function Header() {
    // sets the About page as the default page
    const [currentPage, setCurrentPage] = useState('About')

    // This method renders the appropriate page component based on the value of currentPage state.
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <header style={styles.headerStyle} >
                <h1>Damar Ellis</h1>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>
            <div style={styles.pageStyle}>
                {renderPage()}
            </div>
        </div>
    );
}
