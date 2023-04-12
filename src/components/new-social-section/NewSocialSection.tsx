import React from 'react';
import fb from '@app/images/fb.png';

export const NewSocialSection = () => {

  return (
      <div className="NewSocialSection panel panel-flat">
        <div className="panel-body">
          <div className="NewSocialSection_content" style={ { display: 'flex', alignItems: 'center' } }>
            <h5 className="hidden-xs">Otrzymuj powiadomienia o najpopularniejszych wydarzeniach</h5>
            <a href="https://www.facebook.com/tanecznykalendarz"
               target="_blank"
               rel='noreferrer'
               className="NewSocialSection_image">
              <img src={ fb } alt=""/>
            </a>
          </div>
        </div>
      </div>
  )
}
