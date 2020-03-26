import React from 'react'


export class Login extends React.Component {

    state = {
        user:'',
        password: '',
    }

    submit = (event)=>{
        console.log('Form Submitted' + this.state.user)
        if(this.state.user === 'Varun'){
            this.props.userLoggedIn(true)
        }
        event.preventDefault()
      }
    
      setName=(event)=>{
        this.setState({user: event.target.value})
        console.log(event.target.type)
      }
    
      setPassword=(event)=>{
        this.setState({password: event.target.value})
        console.log(event.target.type)
      }

    render(){

            return (
                <div>
                <form onSubmit = {this.submit}>
                <label>User Name: </label> 
                <input type = "text" 
                        value = {this.state.user}
                        onChange = {this.setName}/>
                <label>Password :</label>
                <input type = "password" 
                       value= {this.state.password} onChange = {this.setPassword}/>
                <button> Submit</button>
                </form>
              </div>
          
              )
    }

}

export default Login