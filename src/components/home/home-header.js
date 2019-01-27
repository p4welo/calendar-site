import React from 'react';
import BackgroundImage from './background-image'
import Logo from './logo'
import './home-header.css';

const HomeHeader = () => (
    <div className='home-header'
        style={{
          height: `100vh`,
          position: `relative`,
          marginBottom: `20px`
        }}>
      <BackgroundImage/>
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