import React from "react";
class ClassCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <>
        <p>Counter App</p>
        <p>Count: {this.state.counter}</p>
        <button
          onClick={() => {
            this.setState({ ...this.state, counter: this.state.counter + 1 });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({ ...this.state, counter: this.state.counter - 1 });
          }}
        >
          -
        </button>
      </>
    );
  }
}
export {ClassCounter};
