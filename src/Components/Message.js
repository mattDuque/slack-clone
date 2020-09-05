import React from 'react'
import './Styles/Message.css'

function Message({message, timeStamp, user, userImage}) {
    return (
        <div className="message">
        <img src={userImage} alt=""/>
           <div className="message__info">
               <h4>
                   {user} <span className="message_timestamp">
                            at  {new Date(timeStamp?.toDate()).toUTCString()}
                           </span>
               </h4>
               <p>{message}</p>
           </div>
        </div>
    )
}

export default Message
