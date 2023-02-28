// importing react, react components and materialize css variable
import React, {useEffect} from 'react';
// import Background from '../img/beach.jpg';
import Silac from './img/logo1.png';
import M from "materialize-css";

// establishing some style variables
const styles = {
    rowNav: {
        height: "65px"
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
        <nav className='green lighten-2 nav-extended'>
            <div className='row nav-wrapper' style={styles.rowNav}>
                <a href='#!' data-target="side-out" className='sidenav-trigger'><i className='material-icons'>menu</i></a>
                <div className='col m2'>
                    <img src={Silac} alt="Silcan logo" style={styles.rowNav}></img>
                </div>
                <div className='col m10'>
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
    </div>
  );
}
// exporting react component
export default Navigation;
