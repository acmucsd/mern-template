import React,{ useState, useEffect } from 'react'

export const EventPage = () => {
    useEffect(() => {

      });
    return (
    <div className = 'containerEvent'>
        <div className = 'eventPage'>
            <div className = 'eventPageTitle'>Event</div>
        </div>
        <div className = 'backToEventTimeline'>
            <a href='/events'> Back to Event Timeline</a>
        </div>
    </div>
  )
}


export default EventPage 
