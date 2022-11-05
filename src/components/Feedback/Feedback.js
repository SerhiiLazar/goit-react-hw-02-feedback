import React from 'react';
import './Feedback.css';

class Feedback extends React.Component {
    // static defaultProps = {
    //     initialGood: 0,
    //     initialNeutral: 0,
    //     initialBad: 0
    // }

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    hendleDecrementGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    }
    hendleDecrementNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    }
    hendleDecrementBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    }
    render() {
        return (
            <div className="section">
                <div className="feedbackMenu">
                    <h2 className="feedbackTitle">
                        Please Leave Feedback
                    </h2>
                    <div className="feedbackBtn">
                        <button type="button" onClick={this.hendleDecrementGood}>Good</button>
                        <button type="button" onClick={this.hendleDecrementNeutral}>Neutral</button>
                        <button type="button" onClick={this.hendleDecrementBad}>Bad</button>
                    </div>
                </div>
                <div className="statisticsMenu">
                    <h2 className="statisticsTitle">
                        Statistics
                    </h2>
                    <ul className="statisticsItem">
                        <li className="statisticsList">Good: <span className="statisticsLink">{this.state.good}</span></li>
                        <li className="statisticsList">Neutral: <span className="statisticsLink">{this.state.neutral}</span></li>
                        <li className="statisticsList">Bad: <span className="statisticsLink">{this.state.bad}</span></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Feedback;