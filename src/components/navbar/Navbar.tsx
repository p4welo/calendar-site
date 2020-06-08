import { Link } from 'gatsby';
import React, { Component } from 'react';
// @ts-ignore
// import {DropdownButton, MenuItem} from 'react-bootstrap';

import { FilterView } from '@app/components';
import logo from '@app/images/logo.png';

import './Navbar.scss';

export class Navbar extends Component {
  render() {
    return (
        <div className='navbar navbar-default navbar-lg app-navbar'>
          <div className='container'>
            <div className="navbar-header">
              <Link to='/' className="navbar-brand">
                <img alt='taneczny kalendarz logo' src={ logo }/>
              </Link>

              <ul className="nav navbar-nav pull-right visible-xs-inline">
                <li>
                  <FilterView/>
                </li>
              </ul>
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
                {/*<li>*/}
                {/*  <DropdownButton*/}
                {/*      bsStyle='default'*/}
                {/*      title='PL'*/}
                {/*      noCaret={true}*/}
                {/*  >*/}
                {/*    <MenuItem eventKey="1">PL</MenuItem>*/}
                {/*    <MenuItem eventKey="2">EN</MenuItem>*/}
                {/*  </DropdownButton>*/}
                {/*</li>*/}
              </ul>
            </div>
          </div>
        </div>
    );
  }
}
