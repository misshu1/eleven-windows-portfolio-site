import React, { Component } from "react";
import Calendar from "react-calendar/dist/entry.nostyle";
import CalendarContainer from "./CalendarContainer";
import CalendarStyle from "./CalendarStyle";
import ClockStyleCalendar from "./ClockStyleCalendar";

class CalendarApp extends Component {
    state = {
        value: new Date(),
        h: new Date().getHours(),
        m: new Date().getMinutes(),
        s: new Date().getSeconds(),
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate(),
        wDay: new Date().getDay()
    };

    calendar = value => this.setState({ value });
    goToToday = () => this.setState({ value: new Date() });
    componentDidMount() {
        this.update = setInterval(this.update, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.update);
    }

    update = () => {
        this.setState({
            h: new Date().getHours(),
            m: new Date().getMinutes(),
            s: new Date().getSeconds(),
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
            day: new Date().getDate(),
            wDay: new Date().getDay()
        });
    };

    render() {
        const { h, m, s, year, month, day, value, wDay } = this.state;
        let currentDay = day;
        let hours = h;
        let minutes = m;
        let seconds = s;
        let session = " AM";
        let currentMonth = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        let weekDay = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];

        if (currentDay < 10) {
            currentDay = "0" + day;
        }
        if (minutes < 10) {
            minutes = "0" + m;
        }
        if (seconds < 10) {
            seconds = "0" + s;
        }
        if (hours > 12) {
            hours = hours - 12;
            session = " PM";
        } else if (hours === 0) {
            hours = 12;
        }

        return (
            <CalendarContainer display={this.props.calendarOpen}>
                <ClockStyleCalendar>
                    <span>{`${hours}:${minutes}:${seconds}`}</span>
                    <span>{session}</span>
                    <span onClick={this.goToToday}>
                        {`${weekDay[wDay]}, ${currentDay} ${
                            currentMonth[month]
                        }, ${year}`}
                    </span>
                </ClockStyleCalendar>
                <CalendarStyle>
                    <Calendar
                        onChange={this.calendar}
                        value={value}
                        locale={"en-EN"}
                        showFixedNumberOfWeeks={true}
                    />
                </CalendarStyle>
            </CalendarContainer>
        );
    }
}

export default CalendarApp;
