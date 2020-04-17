import React, { Component } from 'react';

export class SocialSection extends Component{
  render() {
    return (
        <div style={{ display: `flex`, justifyContent: `center` }}>
          <div className="well well-white text-center">
            <h5 className='no-margin-top'>
              Polub nas na Facebooku i bądź na bieżąco z nowymi wydarzeniami!
            </h5>
            <a href='https://www.facebook.com/tanecznykalendarz/'
                id='fb-out-link'
                target='_blank'
                style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#2196f3', padding: '15px', color: 'white' }}
                className="btn btn-float btn-rounded heading-btn">
              <i className="fab fa-facebook-f" style={{ fontSize: '2rem' }}></i>
            </a>
            {/*<div className="fb-like"*/}
            {/*    data-href="https://facebook.com/tanecznykalendarz/"*/}
            {/*    data-layout="button_count"*/}
            {/*    data-action="like"*/}
            {/*    data-size="large"*/}
            {/*    data-show-faces="true"*/}
            {/*    data-share="true"></div>*/}
          </div>
        </div>
    );
  }
}
