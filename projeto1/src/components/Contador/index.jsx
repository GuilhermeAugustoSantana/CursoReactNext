import { Component } from 'react';

class Contador extends Component {
  state = { counter: 0 };
  timeoutUpdate = null;

  componentDidMount() {
    this.handleTimeout();
  }

  componentDidUpdate() {
    this.handleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeout = () => {
    const { counter } = this.state;

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ counter: counter + 1 });
    }, 1000);
  };

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h1>{counter}</h1>
      </div>
    );
  }
}

export default Contador;
