import React from 'react';

class Footer extends React.Component {
  render() {
    const year = new Date().getFullYear();
    return (
        <div className='panel bg-primary-700 no-border-radius no-margin-bottom'>
          <div className="panel-body">
            <div className="container">
              <p>©{year} Kalendarz taneczny</p>
            </div>
          </div>
        </div>
    );
  }
}
export default Footer;