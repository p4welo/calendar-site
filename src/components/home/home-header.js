import React from 'react';
import Logo from './logo'
import './home-header.css';
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
            Turnieje taneczne w jednym miejscu
          </h2>
          <div className="btn-group">
            <a href="https://goo.gl/forms/l2Ri9kqlDrPJsUnO2"
                className="btn btn-primary btn-raised"
                style={{
                  background: `#07beb8`,
                  borderColor: `#07beb8`
                }}
                target='_blank'
                rel="noopener noreferrer">Zgłoś turniej za darmo</a>
          </div>
        </div>
      </div>
    </div>
);

export default HomeHeader;