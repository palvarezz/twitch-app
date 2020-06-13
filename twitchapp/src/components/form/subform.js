import React, { Component, useRef } from 'react';
import "./subform.css"



class Subform extends Component{
  constructor(props) {
    super(props)
    this.state = {
      value :''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 handleChange(event){
   this.setState({
     value: event.target.value
   });
 }
 handleSubmit(error){
   error.preventDefault();
   console.log(this.state.value);
   let message = {
     message :  this.state.value
   }
   this.state.value = '';
   //const data = {username: 'example'}
   console.log("In handle submit")
   console.log(message);
   fetch('/api/messages', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify(message)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
 }
 
  

  render(){
    return (
    <div className='wrapper flex-grow-1 footer'>
      <form onSubmit={this.handleSubmit}>
      <input placeholder="Enter Comments" ref="comment" type='text' value={this.state.value} onChange={this.handleChange}></input>
      <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
}
export default Subform;
