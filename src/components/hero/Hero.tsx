import React, { Component } from 'react';
// import image from '@images/home2.jpg';

export class Hero extends Component {
  render() {
    return (
        <div className="profile-cover">
          <div className="profile-cover-img"
              style={{ backgroundImage: `url(https://scontent.fktw1-1.fna.fbcdn.net/v/t1.0-9/62053354_2402295976500635_722495309724254208_o.jpg?_nc_cat=104&_nc_sid=cdbe9c&_nc_oc=AQmky9c0kNwYT3ZwNtIWDYhqYVTZdfMvGMX8wvWffCuInsTyM7b7eXlU62S8tJSP8Pc&_nc_ht=scontent.fktw1-1.fna&oh=41021290652616e21ba1951c880eb838&oe=5EA0C896)`, backgroundPosition: `50% 70%` }}/>
          <div className="media container" style={{ display: 'flex', flexDirection: 'column', bottom: '30%'}}>
            {/*<div className="media-left">*/}
            {/*  <a href="#" className="profile-thumb">*/}
            {/*    <img src="../../../../global_assets/images/placeholders/placeholder.jpg"*/}
            {/*        className="img-circle img-md" alt=""/>*/}
            {/*  </a>*/}
            {/*</div>*/}

            <div className="media-body mb-20" style={{ width: 'auto' }}>
              <h1 className='bg-grey-800'
                  style={{ display: 'inline', padding: '0.5rem 0.8rem', textShadow: 'none', fontSize: '3rem', whiteSpace: `normal` }}>Turnieje tańca w jednym miejscu</h1>
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
