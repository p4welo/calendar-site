import React, { Component } from 'react';

export class SocialButtons extends Component {
  render() {
    return (
        <>
          <h5 className='no-margin-top'>
            Polub nas na Facebooku i bądź na bieżąco z nowymi wydarzeniami!
          </h5>
          <div className="fb-like"
              data-href="https://facebook.com/tanecznykalendarz/"
              data-layout="button_count"
              data-action="like"
              data-size="large"
              data-show-faces="true"
              data-share="true" />
        </>
    );
  }
}
