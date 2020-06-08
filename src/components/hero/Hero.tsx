import React, { Component } from 'react';
import hero from '@app/images/hero.jpg';

export class Hero extends Component {
  render() {
    return (
        <div className="profile-cover">
          <div className="profile-cover-img"
              style={{ backgroundImage: `url(${hero})`, backgroundPosition: `50% 70%` }}/>
          <div className="media container" style={{ display: 'flex', flexDirection: 'column', bottom: '30%'}}>

            <div className="media-body mb-20" style={{ width: 'auto' }}>
              <h1 className='bg-grey-800'
                  style={{ display: 'inline', padding: '0.5rem 0.8rem', textShadow: 'none', fontSize: '3rem', whiteSpace: `normal` }}>
                Turnieje tańca w jednym miejscu
              </h1>
            </div>

            <div className="media-left media-middle">
              <ul className="list-inline list-inline-condensed no-margin-bottom text-nowrap">
                <li>
                  <a href='https://goo.gl/forms/l2Ri9kqlDrPJsUnO2' target='_blank'
                      className="btn btn-primary btn-raised btn-xlg">
                  Zgłoś turniej za darmo
                </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    )
  }
}
