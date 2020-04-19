import React, { Component } from 'react';
import './FilterView.scss';

export class FilterView extends Component<> {
  render() {
    return (
        <>
          <button>Filter</button>
          <div className='FilterView FilterView--hidden'>
            <div className="navbar navbar-default navbar-component no-border-radius">
              <div className="navbar-header">
                <ul className="nav navbar-nav pull-left">
                  <li>
                    <a className="mr-10 ml-10">
                      <i className="fas fa-arrow-left"></i>
                    </a>
                  </li>
                  <li>
                    <div className="has-feedback">
                      <input type="search" className="form-control" placeholder="Search field"/>
                      <div className="form-control-feedback">
                        <i className="icon-search4 text-size-base"></i>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            dupa
          </div>
        </>
    );
  }
}
