import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
      <div style={{backgroundColor: "#edf5e1"}}>
        <BottomNavigation >
          <a href="https://www.facebook.com/">
          <BottomNavigationAction color="red" label="Facebook" value="recents" icon={<FacebookIcon  style={{fill: "#3b5998"}}/>} />
          </a>
          <a href="https://github.com/Rhydderchc/sernex">
          <BottomNavigationAction label="GitHub" value="folder" icon={<GitHubIcon  style={{fill: "#2f3136"}}/>} />
          </a>
          <a href="https://instagram.com/">
          <BottomNavigationAction label="Instagram" value="nearby" icon={<InstagramIcon  style={{fill: " #C13584"}}/>} />
          </a>
        </BottomNavigation>
      </div>
)
}

export default Footer