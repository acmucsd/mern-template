import React,{ useState, useEffect } from 'react'

export const CreateAccount = () => {
    useEffect(() => {
        document.body.className = 'bodyLogin';
        return () => { document.body.className = ''; }
      });

  return (
    <div className = 'containerLogin'>
    <div className = 'CreateAccount'>
        <div class='createaccTitle'>Create account</div>
        <form className = 'add-form'>
            <div className= 'form-control'>
                <label>Your Name*</label>
                <input required type='text' placeholder = 'Enter Full Name'/>
            </div>
            <div className= 'form-control'>
                <label>UCSD Email*</label>
                <input required type='text' placeholder = 'Enter Email' />
            </div>
            <div className= 'form-control'>
                <label>Password*</label>
                <input required type='text' placeholder = 'Password' />
            </div>
            <div className= 'form-control'>
                <label>Re-enter Password*</label>
                <input required type='text' placeholder = 'Re-type password' />
            </div>
        </form>
        <button type="button" className = 'createbtn'>Create your account</button>
        <div className = 'backtoLogin'>
            <div style={{marginBottom: "10px"}}>* Required Fields</div>
            <div>Already have an account?</div> 
            <a href='/'> Back to Login</a>
        </div> 
    </div>
    </div>
  )
}


export default CreateAccount;