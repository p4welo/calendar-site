import React, { Component } from 'react';
import './FilterView.scss';

interface FilterViewState {
  visible: boolean;
}
export class FilterView extends Component<{}, FilterViewState> {
  initialState: FilterViewState = {
    visible: false
  };

  state = this.initialState;

  setFilterOn() {
    this.setState({ visible: true })
  }

  setFilterOff() {
    this.setState({ visible: false })
  }

  render() {
    return (
        <>
          {/*<a onClick={this.setFilterOn.bind(this)}>*/}
          {/*  <i className="fas fa-search"*/}
          {/*      style={{fontSize: `1.6rem`}}></i>*/}
          {/*</a>*/}
          <div className={`FilterView ${!this.state.visible ? 'FilterView--hidden' : ''}`}>
            <div className="navbar navbar-default navbar-component no-border-radius">
              <div className="navbar-header">
                <ul className="nav navbar-nav pull-left">
                  <li>
                    <a className="mr-10 ml-10" onClick={this.setFilterOff.bind(this)}>
                      <i className="fas fa-arrow-left"/>
                    </a>
                  </li>
                  <li style={{ width: `calc(100vw - 100px)` }}>
                    <div className="has-feedback">
                      <input type="search" className="form-control" placeholder="Szukaj"/>
                      <div className="form-control-feedback">
                        <i className="fas fa-search text-size-base"/>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
    );
  }
}
