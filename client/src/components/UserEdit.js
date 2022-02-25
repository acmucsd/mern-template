import React, { useState, useEffect } from 'react'

export const UserEdit = () => {
    useEffect(() => {
        document.body.className = 'bodyUser';
        return () => { document.body.className = ''; }
      });
  
    return (
    <div className = 'containerUser'>
        <div className = 'userEdit'>
        <div class='userEditTitle'>Edit Your Account</div>
        <form className = 'add-form'>
            <div className= 'form-control'>
                <label>Instagram</label>
                <input type='text' placeholder = 'JohnSmith123'/>
            </div>
            <div className= 'form-control'>
                <label>Facebook</label>
                <input type='text' placeholder = 'John Smith' />
            </div>
            <div className= 'form-control'>
                <label>Discord</label>
                <input  type='text' placeholder = 'JohnSmith#1234' />
            </div>
            <div className= 'form-control'>
                <label>LinkedIn</label>
                <input required type='text' placeholder = 'John Smith' />
            </div>
        </form>
        <button type="button" className = 'createbtn'>Save Changes</button>
    </div>
    </div>

  )
}

export default UserEdit
