import React,{ useState, useEffect } from 'react'


export const YourUser = () => {
    useEffect(() => {
        document.body.className = 'bodyUser';
        return () => { document.body.className = ''; }
      });

    return (
        <div className = 'containerUser'>
            <div className = 'user'>
              <img src={"https://www.w3schools.com/howto/img_avatar.png"} alt = 'User Profile' className = 'userAvatar'></img>
              <div class = 'userName'> John Smith</div>
              <div class = 'userGrad'> Expected June 2023</div>
                <div className = 'userIGFB'>
                  <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"}
                    alt = 'Instagram' className = 'userSocialImages'></img>
                  <div className = 'userIGFBNames'>JohnSmith</div>
                  <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"}
                    alt = 'Facebook' className = 'userSocialImages'></img>
                  <div className = 'userIGFBNames'>John Smith</div>
                </div>
                <div className = 'userDCLI'>
                  <img src={"https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Circle-1024x1024.png"}
                    alt = 'Discord' className = 'userSocialImages'></img>
                  <div className = 'userDCLINames'>JohnSmith#1234</div>
                  <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"}
                    alt = 'LinkedIn' className = 'userSocialImages'></img>
                  <div className = 'userDCLINames'>John Smith</div>
                </div>
              <div className = 'userEvents'>
              <a href = "/user/id/events">Events Attending</a>
              </div>
            </div>
        </div>
  )
}


export default YourUser