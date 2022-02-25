import React,{ useState, useEffect } from 'react'

export const Login = () => {
    useEffect(() => {
        document.body.className = 'bodyLogin';
        return () => { document.body.className = ''; }
      });

    return (
    <>
    {/* Login Form */}

    
    <div className = 'containerLogin'>
    <div className = 'Login'>
        <div className = 'logtitle'>NAME HERE</div>
        <form className = 'add-form'>
            <div className= 'form-control'>
                <label>Email</label>
                <input required type='text' placeholder = 'Enter Email' />
            </div>
            <div className= 'form-control'>
                <label>Password</label>
                <input required type='text' placeholder = 'Password' />
            </div>
        </form>
        <button type="button" className = 'loginbtn'>Login</button>
    </div>

    {/* Create an Account Button*/}
    <div className = 'createacc'>
    <a href = "/create-account">Create an Account</a>
    </div>
    </div>
    </>
  )
}

export default Login;

