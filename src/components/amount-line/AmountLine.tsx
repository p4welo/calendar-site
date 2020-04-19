import React, { Component } from 'react';

interface AmountLineProps {
  futureAmount: number;
  eventAmount: number;
}
export class AmountLine extends Component<AmountLineProps> {
  render() {
    return (
        <div className='navbar navbar-default'>
          <div className='navbar-text text-center btn-block'>
            W kalendarzu zgłoszono
            <strong> {this.props.eventAmount} </strong>
            wydarzeń, w tym
            <strong> {this.props.futureAmount} </strong>
            nadchodzących
          </div>
        </div>
    );
  }
}
