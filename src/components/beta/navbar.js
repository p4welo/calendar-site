import React from 'react';
import logo from '../../images/logo.png';
import { Link } from '@reach/router';

class Navbar extends React.Component {

  render() {
    return (
        <div className='navbar navbar-default navbar-lg app-navbar'>
          <div className='container'>
            <div className="navbar-header">
              <Link to='/' className="navbar-brand">
                <img alt='taneczny kalendarz logo' src={ logo }/>
              </Link>
            </div>

            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                {/*<li>*/}
                {/*  <Link to='/archive'>Zorganizuj turniej</Link>*/}
                {/*</li>*/}
                <li>
                  <Link to='/' id='navbar-goto-index'>Start</Link>
                </li>
                <li>
                  <Link to='/archive' id='navbar-goto-archive'>Archiwum</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}

export default Navbar;