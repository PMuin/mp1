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

        let user={
            name: "Patri",
            password: "1234"
        }

    return (
      <div>
        <h1>Form {this.props.data} </h1>
        <form> 
            <InputElement label="Username" type="text" value={user.name}/>
            <InputElement label="Password" type="password" value={user.password}/>

                {this.props.children}
        </form>
        <p>{'Message:' + message}</p>
        <p>{user.username}</p>
      </div>
    );
  }
}
export default Form;
