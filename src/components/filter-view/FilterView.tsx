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
          <button onClick={this.setFilterOn.bind(this)}>Filter</button>
          <div className={`FilterView ${!this.state.visible ? 'FilterView--hidden' : ''}`}>
            <div className="navbar navbar-default navbar-component no-border-radius">
              <div className="navbar-header">
                <ul className="nav navbar-nav pull-left">
                  <li>
                    <a className="mr-10 ml-10" onClick={this.setFilterOff.bind(this)}>
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
