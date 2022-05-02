import React from 'react';
import styles from './Clock.module.css';

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <div className={styles.clock}>
                <h1 className={styles.h1}>Hello, world!</h1>
                <h2 className={styles.h2}>
                    It is {this.state.date.toLocaleTimeString()}.
                </h2>
            </div>
        );
    }
}
