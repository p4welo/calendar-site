import React from 'react';

interface AmountLineProps {
  futureAmount: number;
}

export const AmountLine = ({futureAmount}: AmountLineProps) => {
  return (
      <h5>Mamy {futureAmount} nadchodzących wydarzeń</h5>
  )
}
