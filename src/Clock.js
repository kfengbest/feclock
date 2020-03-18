import React from 'react'
import './App.css';

export default class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
        this.intervalId = null;
        this.ticking = this.ticking.bind(this);
    }

    componentDidMount() {
        this.intervalId = setInterval(this.ticking, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    
    ticking () {
        this.setState({
            date: new Date()
        });
    }

    // 1-9 => 01 - 09
    appendZeroIfNeed(dig) {
        if(dig <=9 && dig >= 0) {
            return "0" + dig.toString();
        }
        return dig.toString();
    }

    // HH:MM:SS
    render() {
        let now = this.state.date;
        let hour = this.appendZeroIfNeed(now.getHours())
        let min = this.appendZeroIfNeed(now.getMinutes())
        let second = this.appendZeroIfNeed(now.getSeconds())
        return (
            <div data-testid="clock-tid">
                <div className="Date" data-testid="clock-date-tid">{this.state.date.toDateString()}</div>
        <div className="Time" data-testid="clock-time-tid">{hour} : {min} : {second} </div>
            </div>
        );
    }
}