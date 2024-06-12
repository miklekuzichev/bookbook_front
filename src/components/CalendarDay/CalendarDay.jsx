function CalendarDay({ nameDays }) {

    const nameDaysToRender = nameDays ? nameDays.map((item) => (
        <div className="calendar__month-name_day">{item}</div>
      )) : [];

    return (
        <div className="calendar__month-name">
            {nameDaysToRender}
        </div>
    );
}

export default CalendarDay;
