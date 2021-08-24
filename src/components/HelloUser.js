import React from 'react';
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleString()
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: new Date().toLocaleString()
      });
    }
    render() {
      return (
        <p className="greeting-date">
          {this.state.time}
        </p>
      );
    }
  }


function HelloUser() {
    return (
    <div className="greeting">
        Welcome to aiBank!<br></br>
        <Clock />
    </div>
    );
  }

  export default HelloUser;
