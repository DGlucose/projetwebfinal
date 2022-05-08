import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./Contacts.scss";
import { Button } from '@material-ui/core';




function Contacts({name}) {

  return (
    <div className="contacts">
        <AccountCircleIcon className='accounticon' />
        {name}

    </div>

  )
}

export default Contacts