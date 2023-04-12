import React from 'react';

interface RibbonProps {
  text?: string;
}
export const Ribbon = ({text}: RibbonProps) => {
  return (
      <div className="ribbon-container">
        <div className="ribbon bg-indigo">{ text ?? 'Polecamy'}</div>
      </div>
  )
}
