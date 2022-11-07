import React, { Component } from "react"

export class InputElement extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input className={this.props.classField}
            width={this.props.fieldLength}
            type={this.props.type} 
            value={this.props.value}/>
      </div>
    );
  }
}

export default InputElement
