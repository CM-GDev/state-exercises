import React, { useState } from "react";
import Navigation from './Navigation';
import Page1 from './pages/Page1';
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";


const Header = () => {
    const [currentPage, setCurrentPage] = useState('Page1')
    
    const renderPage = () => {
        if (currentPage === 'Page1') {
            return <Page1 />;
        }
        if (currentPage === 'Page2') {
            return <Page2 />
        }
        return <Page3 />
    }

    const handlePageChange = (page) => setCurrentPage(page);
    
    return(
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}

export default Header;