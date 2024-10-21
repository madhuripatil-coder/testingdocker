import React, { PureComponent } from "react";

export default class PureChildComponent extends PureComponent {
  render() {
    console.log("render child component");
    return (
      <>
        <h3>Child Component {this.props.count}</h3>
      </>
    );
  }
}
