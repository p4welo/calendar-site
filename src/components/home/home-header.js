import React from 'react';
import Logo from './logo'
import image from '../../images/home.jpg';

const Component = React.Component;

class HomeHeader extends Component {
  render() {
    return (
        <>
          <div className='home-header'>
            <div className='home-header__slide' style={{ background: `url(${image}) no-repeat scroll center 50%/cover` }}/>
            <div/>
            <div className='container home-header__content'>
              <div className='col-sm-offset-1 home-header__content-column'>
                <Logo/>
                <h2 className='home-header__description'>
                  Turnieje tańca w jednym miejscu
                </h2>
                <div className='btn-group'>
                  <a href='https://goo.gl/forms/l2Ri9kqlDrPJsUnO2'
                      className='btn btn-primary btn-raised'
                      target='_blank'
                      rel='noopener noreferrer'>Zgłoś turniej za darmo</a>
                  <a href='#main'
                      className='btn btn-default btn-raised'>Przeglądaj turnieje</a>
                </div>
              </div>
            </div>
            <div className='navbar navbar-default'>
              <div className='navbar-text text-center'>
                W kalendarzu zgłoszono
                <strong> {this.props.eventAmount} </strong>
                wydarzeń, w tym
                <strong> {this.props.futureAmount} </strong>
                nadchodzących
              </div>
            </div>

          </div>
        </>
    )
  }
}

export default HomeHeader;