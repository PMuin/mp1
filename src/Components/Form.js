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
            name:"Patri",
            password:"1234"
        }
        const {classForm ,...rest}=this.props

        
    return (
      <div>
        <h1>Form {this.props.data} </h1>
        <form className={classForm}> 
            <InputElement label="Username" type="text" value={user.name} classProp={...this.rest}/>
            <InputElement label="Password" type="password" value={user.password} classProp={...this.rest}/>

                {this.props.children}
        </form>
        <p>{'Message:' + message}</p>
        <p>{user.username}</p>
      </div>
    );
  }
}
export default Form;
