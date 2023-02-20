import React, { useState } from "react";
import Navigation from './Navigation';
import Page1 from './pages/Page1'


function Header() {
    const [currentPage, setCurrentPage] = useState('Page1')
    
    const renderPage = () => {
        if (currentPage === 'Page1') {
            return <Page1 />;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);
    return(
        <div>
            <div>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
            </div> 
        </div>
    )
}

export default Header;