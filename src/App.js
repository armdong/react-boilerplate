import React from "react";
import { hot } from "react-hot-loader/root";

class App extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  handleDecrement = () => {
    this.setState(state => ({ count: state.count - 1 }));
  };

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2 className={this.state.count > 5 ? "warning" : null}>
          Count: {this.state.count}
        </h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default hot(App);
