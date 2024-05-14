import React from "react";
import "./Display.css";

export default class Display extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <div className="component-display">
        <div>{value}</div>
      </div>
    );
  }
}
