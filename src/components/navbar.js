import React from 'react';
import logo from '../images/logo.png';

const Component = React.Component;

class Navbar extends Component {
  render() {
    return (
        <div className='navbar navbar-default navbar-lg app-navbar'>
          <div className='container'>
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                <img src={logo}/>
              </a>
            </div>
          </div>
        </div>
    )
  }
}

export default Navbar;