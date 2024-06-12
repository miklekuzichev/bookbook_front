import CalendarWeek from '../CalendarWeek/CalendarWeek';

function CalendarDate({ onClick, dates, month, year, nameMonth, nameDays }) {

    const weeks = (dates.length)/7;
    const weeksArray = [];

    // Разбивка массива с числами месяца на недели (6 недель - 6 массивов)
    //
    for(let i = 0; i < weeks; i++) {
        let targerArray = [];
        targerArray.push(dates.slice(i*6+i, i*6+6+i+1));
        weeksArray.push(targerArray);
    }

    const weeksToRender = weeksArray ? weeksArray.map((week) => {
        const monthDateToRender = week ? week.map((item) => {
            return (
                <CalendarWeek
                    dates={item}
                    onClick={onClick}
                    month={month}
                    year={year}
                    nameDays={nameDays}
                    nameMonth={nameMonth}
                />
            );
        }) : [];
        return (
            <>
                {monthDateToRender}
            </>
        );
    }) : [];

    return (
        <>
            {weeksToRender}
        </>
    );
}

export default CalendarDate;
