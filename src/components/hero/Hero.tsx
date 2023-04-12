import React from 'react';
import hero from '@app/images/hero.jpg';

export const Hero = () => {
  return (
      <div className="profile-cover" style={{marginBottom: '5rem'}}>
        <div className="profile-cover-img"
             style={ { backgroundImage: `url(${ hero })`, backgroundPosition: `50% 70%` } }/>
        <div style={{position: 'absolute', top: '0', width: '100%', height: '100%'}}>
          <div className="container" style={{display: 'flex', height: '100%', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
            <h1 className="bg-grey-800"
                style={ {
                  padding: '0.5rem 0.8rem',
                  textShadow: 'none',
                  fontSize: '3rem',
                  whiteSpace: `normal`
                } }>
              Kalendarz taneczny
            </h1>
            <h1 className="bg-grey-800"
                style={ {
                  padding: '0.5rem 0.8rem',
                  textShadow: 'none',
                  fontSize: '3rem',
                  whiteSpace: `normal`
                } }>
              Turnieje tańca w jednym miejscu
            </h1>
          </div>
        </div>
        <div style={{width: '100%', position: 'absolute', bottom: '-20px', textAlign: 'center'}}>
          <a href="https://goo.gl/forms/l2Ri9kqlDrPJsUnO2" target="_blank"
             className="btn bg-indigo btn-xlg">
            Zgłoś turniej za darmo
          </a>
        </div>
      </div>
  )
}

