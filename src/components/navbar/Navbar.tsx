import { Link } from 'gatsby';
import React from 'react';

import { FilterView } from '@app/components';
import logo from '@app/images/logo.png';

import './Navbar.scss';

export const Navbar = () => {

  const redirectToAddCompetitionForm = () => {
    window.location = 'https://goo.gl/forms/l2Ri9kqlDrPJsUnO2'
  };

  return (
      <div className="navbar navbar-default navbar-lg app-navbar">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              <img alt="taneczny kalendarz logo" src={ logo }/>
            </Link>

            {/*<ul className="nav navbar-nav pull-right visible-xs-inline">*/}
            {/*  <li>*/}
            {/*    <FilterView/>*/}
            {/*  </li>*/}
            {/*</ul>*/}
          </div>

          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              {/*<li>*/ }
              {/*  <Link to='/archive'>Zorganizuj turniej</Link>*/ }
              {/*</li>*/ }
              <li>
                <Link to="/" id="navbar-goto-index">Strona główna</Link>
              </li>
              {/*<li>*/}
              {/*  <button onClick={ () => redirectToAddCompetitionForm() }*/}
              {/*          className="btn bg-indigo">Dodaj turniej</button>*/}
              {/*</li>*/}
              {/*<li>*/ }
              {/*  <Link to='/archive' id='navbar-goto-archive'>Archiwum</Link>*/ }
              {/*</li>*/ }
            </ul>
          </div>
        </div>
      </div>
  )
}
