function CalendarHeader({ month, year, reverse }) {

    return (
       <>
            {reverse ? ( 
            <>
                <div className="calendar__header calendar__header-right">
                    <div className="calendar__header-name_right">{ month } { year }
                    </div>
                    <span className="calendar__header-button_right">
                    </span>
                </div>   
            </>) : ( 
            <>
                <div className="calendar__header calendar__header-left">
                    <span className="calendar__header-button_left">
                    </span>
                    <div className="calendar__header-name">{ month } { year }
                    </div>
                </div>
            </>)
            } 
        </>
    );
}

export default CalendarHeader;

