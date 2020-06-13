import React from 'react';
import ReactDOM from 'react-dom'
import { Component } from 'react';
import "./message.css"

//let msg = [];
class Message extends Component {
  constructor(){
    super();
    this.state ={
      messages: []
    }
  }
  componentDidMount(){
    this.interval = setInterval(()=> fetch('/api/messages')
    .then(res => res.json())
    .then(messages => this.setState({messages}, () =>{
      //console.log("Messages fetched..", messages);
    }

    
    )),1000);
    
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentWillUpdate(){
    const node = ReactDOM.findDOMNode(this)
    this.shouldScrollToBottom = node.scrollTop + node.clientHeight >= node.scrollHeight
  }
  componentDidUpdate(){
    if (this.shouldScrollToBottom) {
      const node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight
    }
    
  }
  //from tmijs
  formatEmotes(text, emotes) {
  
  }

  render(){
      return (
        <div className='messages'>
            <ul >
              {this.state.messages.map(messages => 
                <li className = 'lmessage'><b>{messages.name}</b>: <span id='msg'> {messages.message}</span> </li>)}
            </ul>
        </div>
      );
  }
}

export default Message;
