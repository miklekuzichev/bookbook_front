import CalendarDay from '../CalendarDay/CalendarDay';
import CalendarHeader from '../CalendarHeader/CalendarHeader';
import CalendarDate from '../CalendarDate/CalendarDate';



function Calendar() {

    const nameDays = ['Mon', 'Thu', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    return (
        <div className="calendar">
            <div className="calendar__month">
                <CalendarHeader
                    month={"November"}
                    year={"2023"}
                    reverse={false}
                />
                <CalendarDay
                    nameDays={nameDays}
                />
                <CalendarDate
                    dates={['', '', '', '', '', '', 1]}
                />
                <CalendarDate
                    dates={[2, 3, 4, 5, 6, 7, 8]}
                />
                <CalendarDate
                    dates={[9, 10, 11, 12, 13, 14, 15]}
                />
                <CalendarDate
                    dates={[16, 17, 18, 19, 20, 21, 22]}
                />
                <CalendarDate
                    dates={[23, 24, 25, 26, 27, 28, 29]}
                />
                <CalendarDate
                    dates={[30, 31, '', '', '', '', '']}
                />
            </div>

            <div className="calendar__month">
                <CalendarHeader
                    month={"December"}
                    year={"2023"}
                    reverse={true}
                />
                <CalendarDay
                    nameDays={nameDays}
                />
                <CalendarDate
                    dates={['', '', 1, 2, 3, 4, 5]}
                />
                <CalendarDate
                    dates={[6, 7, 8, 9, 10, 11, 12]}
                />
                <CalendarDate
                    dates={[13, 14, 15, 16, 17, 18, 19]}
                />
                <CalendarDate
                    dates={[20, 21, 22, 23, 24, 25, 26]}
                />
                <CalendarDate
                    dates={[27, 28, 29, 30, '', '', '']}
                />
                <CalendarDate
                    dates={['', '', '', '', '', '', '']}
                />
            </div>

            
        </div>
    );
}

export default Calendar;

