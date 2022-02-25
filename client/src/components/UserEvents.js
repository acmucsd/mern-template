import React, { useState, useEffect } from 'react'

export const UserEvents = () => {
    useEffect(() => {
        document.body.className = 'bodyUser';
        return () => { document.body.className = ''; }
      });
  
    return (
    <div className = 'containerUser'>
        <div className = 'userEvents'>
            <div className = 'userEventsTitle'>Events Attending</div>
        </div>
        <div className = 'backToUser'>
            <a href='/user/id'> Back to User</a>
        </div>
    </div>
  )
}


export default UserEvents