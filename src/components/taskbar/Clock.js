import React, { Component } from "react";

class Clock extends Component {
    state = {
        h: new Date().getHours(),
        m: new Date().getMinutes(),
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate()
    };

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
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
            day: new Date().getDate()
        });
    };

    render() {
        const { h, m, year, month, day } = this.state;
        let hours = h;
        let minutes = m;
        let session = " AM";
        let currentMonth = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];

        if (minutes < 10) {
            minutes = "0" + m;
        }
        if (hours > 12) {
            hours = hours - 12;
            session = " PM";
        } else if (hours == 0) {
            hours = 12;
        }

        return (
            <React.Fragment>
                {hours + ":" + minutes + session} <br />
                {day + "-" + currentMonth[month] + "-" + year}
            </React.Fragment>
        );
    }
}

export default Clock;
