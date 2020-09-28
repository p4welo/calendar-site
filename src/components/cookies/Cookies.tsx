import React, { Component } from 'react';

interface CookiesState {
  visible: boolean;
}
export class Cookies extends Component<any, CookiesState> {
  initialState: CookiesState = {
    visible: !window.localStorage.getItem('calendar:cookiePolicyShown')
  }

  state:CookiesState = this.initialState;

  hide() {
    window.localStorage.setItem('calendar:cookiePolicyShown', true);
    this.setState({
      visible: false
    });
  }

  render() {
    if (this.state.visible) {
      return (
          <div>
            visible <button onClick={() => this.hide()}>hide</button>
          </div>
      );
    }
    return (
        <div>
  brak
        </div>
    );
  }
}