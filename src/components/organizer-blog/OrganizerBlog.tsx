import React from 'react';
import blog1 from '@app/images/blog-1.jpg';

import "./OrganizerBlog.scss";

export const OrganizerBlog = () => {
  return (
      <>
        <h1>Blog dla Organizatorów</h1>
        <div className="row" style={ { display: 'flex', flexWrap: 'wrap' } }>
          <div className="col-lg-4 col-sm-6 col-xs-12"
               style={{ display: `flex`, flexDirection: `column`, marginBottom: `150px` }}>
            <a href='https://kartazgloszen.pl/pl/jak-zorganizowac-turniej-tanca-online' target='_blank'>
              <div className="thumbnail btn-raised mb-20" style={{padding: '0'}}>
                <img alt='jak zorganizować turniej online' src={ blog1 }/>
              </div>
              <h6 className="text-semibold no-margin text-uppercase" style={{ color: '#333' }}>
                Turniej tańca online – jak go zorganizować, żeby zachwycić uczestników?
              </h6>
            </a>
          </div>
        </div>
      </>
  );
}