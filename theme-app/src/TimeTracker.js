import React, { Component } from 'react';

const TimeTracker = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        startTime: new Date(),
        timeSpent: 0,
      };
    }

    componentDidMount() {
      this.timer = setInterval(() => {
        this.setState({
          timeSpent: Math.floor((new Date() - this.state.startTime) / 1000),
        });
      }, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.timer);
    }

    render() {
      return <WrappedComponent {...this.props} timeSpent={this.state.timeSpent} />;
    }
  };
};

export default TimeTracker;
