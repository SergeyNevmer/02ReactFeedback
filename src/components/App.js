import React from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import NotificationMessage from "./NotificationMessage/NotificationMessage";

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (e) => {
    e.preventDefault();

    let prop = e.target.name;

    this.setState((state) => {
      return { [prop]: state[prop] + 1 };
    });
  };

  isRetrievable(obj) {
    for (let item of Object.values(obj)) {
      if (item > 0) return true;
    }
    return false;
  }

  countTotalFeedback = () => {
    let { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((100 / this.countTotalFeedback()) * good);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <div>
          <Section message="Please leave feedback" />
          <FeedbackOptions onHandleClick={this.handleClick} />
        </div>
        {this.isRetrievable(this.state) ? (
          <div>
            <Section message="Statistics" />
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          </div>
        ) : (
          <NotificationMessage message="No feedback given" />
        )}
      </>
    );
  }
}
