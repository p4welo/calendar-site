import React from 'react';

const HomeHeader = () => (
    <div className="container"
        style={{
          height: `100vh`,
        }}>
      <div style={{
            display: `flex`,
            flexDirection: `column`,
            height: `100%`,
            justifyContent: `center`,
          }}>
        <div>LOGO</div>
        <h2>Turnieje taneczne w jednym miejscu</h2>
        <div className="btn-group">
          <button className="btn btn-primary btn-raised">Zgłoś turniej za darmo</button>
        </div>
      </div>
    </div>
);

export default HomeHeader;