import React from 'react';
import Login from './Login'
import Menu from './Menu'

export class App extends React.Component{
   state = {
     loginStatus: false
   }

  loginStatus = (status)=>{
     this.setState({
       loginStatus: status
     })
  }

  render(){
    let loginStatus = this.state.loginStatus
    return(
      <section>
        <div>
         {loginStatus ? <Menu />  :  <Login userLoggedIn = {this.loginStatus} />}
       </div>
       </section>
    )
  }

}
