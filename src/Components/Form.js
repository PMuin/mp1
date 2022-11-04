import React, { Component } from "react";
import InputElement from "./InputElement";

class Form extends Component {

    constructor (props) {
        super(props);
        this.state={
           ok:true,
           display: '' 
        }
    }
    render() {
        let message;
        if (this.state.ok === true) {
            message = "All Ok";
        } else {
            message = "Not Ok"
        }
    return (
      <div>
        <h1>Form {this.props.data} </h1>
        <form> 
            <InputElement label='Username' type='text' value={user.name}/>
            <InputElement label='Password' type="password" value={user.password}/>
            <button type="submit">Submit</button>
        </form>
        <p>{'message:' + message}</p>
        <p>{user.username}</p>
      </div>
    );
  }
}
export default Form;
