import React from 'react';
import Logo from './logo'
import image from '../../images/home.jpg';

const HomeHeader = () => (
    <div className='home-header'
        style={{
          height: `100vh`,
          position: `relative`,
          marginBottom: `20px`
        }}>

      <div className="header__slide" style={{
        background: `url(${image}) no-repeat scroll center 50%/cover`,
        position: `absolute`,
        top: `0`,
        left: `0`,
        width: `100vw`,
        height: `100vh`,
      }}></div>
      <div className='container'
          style={{
            height: `100%`,
          }}>
        <div className='col-sm-offset-1'
            style={{
              display: `flex`,
              flexDirection: `column`,
              height: `100%`,
              justifyContent: `center`
            }}>
            <Logo/>
          <h2 style={{ zIndex: `1` }}>
            Turnieje tańca w jednym miejscu
          </h2>
          <div className="btn-group">
            <a href="https://goo.gl/forms/l2Ri9kqlDrPJsUnO2"
                style={{marginRight: `5px`}}
                className="btn btn-primary btn-raised"
                target='_blank'
                rel="noopener noreferrer">Zgłoś turniej za darmo</a>
            <a href="#main"
                className="btn btn-default btn-raised">Przeglądaj turnieje</a>
          </div>
        </div>
      </div>
    </div>
);

export default HomeHeader;