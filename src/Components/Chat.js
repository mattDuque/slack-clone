import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import Message from './Message'
import ChatInput from './ChatInput'
import db from '../firebase'
import './Styles/Chat.css'

function Chat() {
    const {roomId} = useParams()
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState([])

    useEffect(() => {
        if (roomId){
            db.collection('rooms')
              .doc(roomId)
              .onSnapshot(snapshot =>
                setRoomDetails(snapshot.data()) 
            )
        }

        db.collection('rooms')
          .doc(roomId)
          .collection('messages')
          .orderBy('timeStamp', 'asc')
          .onSnapshot((snapshot) => 
            setRoomMessages(snapshot.docs.map(doc => doc.data())
          ))
    }, [roomId])
    
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>#{roomDetails?.name} </strong>
                        <StarBorderIcon/>
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <InfoOutlinedIcon/> Details
                </div>
            </div>
            <div className="chat__messages">
                {roomMessages.map(({message, timeStamp, user, userImage}) =>(
                    <Message
                        message={message}
                        timeStamp={timeStamp}
                        user={user}
                        userImage={userImage}
                    />
                ))}  
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomId}/>
        </div>
    )
}

export default Chat
