function CalendarDate({ dates }) {

    const monthDateToRender = dates ? dates.map((item) => (
        <div className="calendar__month-date_number"><span>{item}</span></div>
      )) : [];

    return (
        <div className="calendar__month-date">
            {monthDateToRender}
    </div>
    );
}

export default CalendarDate;
