import React, { PureComponent } from "react";
import PureChildComponent from "./PureChildComponent";

export default class ExamplePureComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      data: 10,
      count: 0,
    };
  }
  render() {
    console.log("Pure component render called");
    return (
      <>
        <h1>Pure Component In React</h1>
        <h2>Data:{this.state.data}</h2>
        <button
          onClick={() => {
            this.setState({ data: 20 });
          }}
        >
          update data
        </button>
        <PureChildComponent count={this.state.count} />
        <button
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >
          update count
        </button>
        <hr />
      </>
    );
  }
}
