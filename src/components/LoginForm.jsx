import React from 'react'

function LoginForm() {
  return (
    <div className="login-form">
        <h1>Login</h1>

        <div className='id-container'> 
          <p>ID</p>
          <input type="text" />
        </div>

        <div className="password-container">
          <p>Password</p>
          <input type="password" name="" id="" />
        </div>
        <div className="login-btn-container">
          <button className='login-btn1'>Sign up</button>
          <button className='login-btn2'>Login</button>
        </div>
  </div>
  )
}

export default LoginForm