// importing react, react components and materialize css variable
import React, {useEffect} from 'react';
// import Background from '../img/beach.jpg';
import Silac from './img/SILAC.png';
import M from "materialize-css";

// establishing some style variables
const styles = {
    navigation: {
        paddingBottom: "10px",
        paddingLeft: '2%'
    },
    h3: {
        marginBottom: '0%',
    },
    header: {
        height: '8rem',
        //backgroundImage: `url(${Background})`,
        margin: '0.5%',
        backgroundPosition: 'right',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    headerDiv: {
        height: '100%',
        marginBottom: '0px',
    },
    logo:{
        height: '140%'
    }
}

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {

    // employing useEffect for side nav
    useEffect(() => {
        var elems = document.querySelectorAll(".sidenav");
        M.Sidenav.init(elems, {});
    }, []);

  return (
    <div>
        {/* Main Nav */}
        <nav className='green lighten-1 nav-extended' style={styles.navigation}>
            <div className='nav-wrapper'>
                <h3 className='brand-logo flow-text truncate' style={styles.h3}>React.js Sandbox</h3>
                <a href='#!' data-target="side-out" className='sidenav-trigger'><i className='material-icons'>menu</i></a>
                <ul className="right hide-on-med-and-down">
                    <li className={currentPage === 'Page1' ? 'active' : ''}>
                        <a href="#Page1" onClick={() => handlePageChange('Page1')}>Page 1
                        </a>
                    </li>
                    <li className={currentPage === 'Page2' ? 'active' : ''}>
                        <a href="#Page2" onClick={() => handlePageChange('Page2')}>Page2
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        {/* Code for side nav when screen is small */}
        <ul className="sidenav" id="side-out">
            <li>
                <a href="#Page1" onClick={() => handlePageChange('Page1')}
                className={`sidenav-close ${currentPage === 'Page1' ? 'active' : ''}`}>Page1
                </a>
            </li>
            <li>
                <a href="#Page2" onClick={() => handlePageChange('Page2')}
                className={`sidenav-close ${currentPage === 'Page2' ? 'active' : ''}`}>Page2
                </a>
            </li>
        </ul>
        {/* Header info */}
        <header className="card-panel" style={styles.header}>
            <div className="row valign-wrapper" style={styles.headerDiv} >
                <img src={Silac} alt="Logo" className="responsive-img" style={styles.logo}/>
            </div>
        </header>
    </div>
  );
}
// exporting react component
export default Navigation;
