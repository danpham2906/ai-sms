/* eslint-disable */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Calendar, { CalendarTileProperties } from 'react-calendar';
import './CalendarView.css';
import seedrandom from 'seedrandom';

function isSameDay(a: Date, b: Date)
{
    return  a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth() &&
            a.getDate() === b.getDate();
}

// Creates some random number of events for a specific date
function generateRandomEvents(start: Date)
{
    let numEvents = [0];
    let date = new Date(start);
    const startMonth = date.getMonth();
    for(date.setDate(1); date.getMonth() === startMonth; date.setDate(date.getDate() + 1))
        numEvents.push(Math.max(0, Math.floor(Math.random() * 6 - 3)));

    return numEvents;
}

// Creates random number of dot markers for events on each day
// Should be driven by real info once data is available
function generateEventMarkers(date: Date)
{
    const allowedColors = ["blueviolet", "crimson", "seagreen"]

    let rng = seedrandom(date.toLocaleString());
    let numEvents = Math.max(0, Math.floor(rng() * 8 - 3));

    return (
        <div className="calendarEvents">
            {Array.from({ length: numEvents }, (_, k) => (
                <div className="calendarEventMarker" style={{ backgroundColor: allowedColors[Math.floor(rng() * 3)] }} />
            ))}
        </div>
    );
}

const CalendarView: React.FC = () => {
    const [value, setValue] = useState<Date>(new Date());
    const [activeStart, setActiveStart] = useState<Date>(new Date());
    const [randomEvents, setRandomEvents] = useState<number[]>();

    const calendarRef = useRef();

    const setDate = (date: Date) => {
        setValue(date);
        setActiveStart(date);
    };

    // Generate dots and date selectors for a specific date
    // Utilizes useCallback so it only updates when the selected date changes
    const tileContent = useCallback(({date, view}: CalendarTileProperties) => {

        if(view === 'month')
        {
            if(isSameDay(date, new Date())) // Current day
            {
                return (
                    <div className="calendarTileContainer">
                        <div className="calendarToday" />
                        {isSameDay(date, value) && <div className={"calendarActiveDay"} />}
                        {generateEventMarkers(date)}
                    </div>
                );
            }
            else if(isSameDay(date, value)) // Active day selector
            {
                return (
                    <div className="calendarTileContainer">
                        <div className="calendarActiveDay" />
                        {generateEventMarkers(date)}
                    </div>
                );
            }

            return (
                <div className="calendarTileContainer">
                    {generateEventMarkers(date)}
                </div>
            );
        }

        return null;
    }, [value]);

    // Here, events for the selected view should be retrieved from the backend
    // Currently does nothing useful
    useEffect(() => {
        setRandomEvents(generateRandomEvents(activeStart));
    }, [activeStart]);

    return (
      <div className="calendar-view">
        <Calendar
          value={value}
          activeStartDate={activeStart}
          onChange={(date) => setDate(date as Date)}
          onViewChange={(props) => setActiveStart(props.activeStartDate)}
          onActiveStartDateChange={(props) => setActiveStart(props.activeStartDate)}
          defaultView="month"
          // showFixedNumberOfWeeks={true}
          tileContent={tileContent}
          minDetail="year"
          next2Label={null}
          prev2Label={null}
        />
      </div>
    );
};

export default CalendarView;