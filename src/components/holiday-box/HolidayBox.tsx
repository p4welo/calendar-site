import { Event } from '@app/model';
import empty from '@app/images/undraw_empty.svg';
import React from 'react';
import { isHoliday } from '@app/utils/date-utils';

interface HolidayBoxProps {
  events: Event[]
}

export const HolidayBox = ({ events }: HolidayBoxProps) => {

  const isHolidayBreak = events.length === 0 && isHoliday();
  if (isHolidayBreak) {
    return (
        <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '6rem 1rem' } }>
          <img src={ empty } alt="Holiday" className="mb-20"/>
          <p><strong>Sezon wakacyjny w pełni...</strong></p>
          <p className="text-center">
            Aktualnie nie mamy nadchodzących wydarzeń.
            <br/>
            Zapraszamy we wrześniu na pierwsze turnieje w sezonie jesiennym!
          </p>
        </div>
    );
  }

  return <></>;
}
