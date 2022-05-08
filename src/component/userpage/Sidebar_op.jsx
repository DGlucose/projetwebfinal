import React from 'react'
import "./Sidebar_op.scss"

function Sidebar_op({text, Icon,page}) {
  return (
    <div className="sidebar_op">
        <Icon/>
        <h2>{text}</h2>
      
    </div>
  )
}

export default Sidebar_op;