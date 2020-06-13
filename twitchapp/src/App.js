import React from 'react';
import './App.css';
import Messages from './components/msg/message';
import SubForm from './components/form/subform';

function App() {
  return (
    <div className="App">
      <div className ='container'>
        <div className = 'row'>
          
          <div className = 'col-sm-11 col-lg-12'>
          <Messages/>
          </div>
          
        </div>
        <div className='row'>
          <div className='col-12' >
          <SubForm/>
          </div>
        </div>
      </div>
     
      
    </div>
  );
}

export default App;
