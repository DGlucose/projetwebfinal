import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "../Contacts.scss";
import { Button } from '@material-ui/core';




function Friends({name}) {

  return (
    <div className="friends">
        {name}
    </div>

  )
}

export default Friends