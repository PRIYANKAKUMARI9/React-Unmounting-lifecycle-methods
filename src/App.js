import logo from './logo.svg';
import './App.css';
import React from 'react'
import Hello from './componenet/Hello';

class App extends React.Component{
  constructor(){
      super();
      this.state={
          show:true
      }
  }
  render(){
      return(
          <div>
               {
                 this.state.show ? <Hello/> : <h1>child componenet change</h1>
               }  
              <button onClick={()=>this.setState({show:!this.state.show})}>Toggle button</button>
          </div>
      )
  }
}

export default App;
