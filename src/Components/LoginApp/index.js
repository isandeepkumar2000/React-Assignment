import { Component } from 'react'
import './index.css'

class LoginApp extends Component {

    state = {Login: true}

    LoginLogout = () => {
        this.setState(prevstate => ({ Login: !prevstate.Login}));
    }
  render() {
    const {Login} = this.state
    return (
      <div className='AppLogin-Conatiner'>
        <div className='AppLogin-items'>
        {Login?<p className='AppLogin-Login'>Please Login</p>:<p className='AppLogin-Welcome'>Welcome User</p>}
            <button className='AppLogin-button' onClick={this.LoginLogout}>
            {this.state.Login ? "Login" : "Logout"}
            </button>
        </div>
      </div>
    )
  }
}

export default LoginApp;