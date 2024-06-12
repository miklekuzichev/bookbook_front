import React, { useRef } from 'react';

function CalendarWeek({ onClick, dates, month, year, nameMonth, nameDays }) {

    const divRef = useRef(null);

    const monthDateToRender = dates ? dates.map((item, index) => {

        const ariaLabelMonthText = nameDays[index] + ' ' + item + ' ' + nameMonth[month] + ' ' + year;

        return (
            <div className="calendar__month-date_number" ref={divRef} aria-label={ariaLabelMonthText} id={item} onClick={onClick}><span>{item}</span></div>
            )}
      ) : [];

    return (
        <div className="calendar__month-date">
            {monthDateToRender}
        </div>
    );
}

export default CalendarWeek;
