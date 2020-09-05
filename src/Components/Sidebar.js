import React, {useState, useEffect} from 'react'
import SidebarOption from './SidebarOption'
import StatusIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import CommentIcon from '@material-ui/icons/Comment'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import PeopleIcon from '@material-ui/icons/People'
import AppsIcon from '@material-ui/icons/Apps'
import DescriptionIcon from '@material-ui/icons/Description'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add';
import { useStateValue } from '../StateProvider'
import db from '../firebase'
import './Styles/Sidebar.css'

function Sidebar() {

    const [{user}] = useStateValue()
    const [channels, setChannels] = useState([])

    useEffect(() =>{
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name
                }))
            )
        ))
    },[])
    
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Slack Room</h2>
                        <h3>
                            <StatusIcon className="status-icon"/>
                            {user?.displayName}
                        </h3>
                </div>
                <CreateIcon/>
            </div>
            <SidebarOption  Icon={CommentIcon} title={"Threads"}/>
            <SidebarOption  Icon={InboxIcon} title={"Mentions & reactions"}/>
            <SidebarOption  Icon={DraftsIcon} title={"Svaed items"}/>
            <SidebarOption  Icon={BookmarkBorderIcon} title={"Channel browser"}/>
            <SidebarOption  Icon={PeopleIcon} title={"Poeple & user groups"}/>
            <SidebarOption  Icon={AppsIcon} title={"Apps"}/>
            <SidebarOption  Icon={DescriptionIcon} title={"File browser"}/>
            <SidebarOption  Icon={ExpandLessIcon} title={"Show less"}/>
            <hr/>
            <SidebarOption  Icon={ExpandMoreIcon} title={"Channels"}/>
            <hr/>
            <SidebarOption  Icon={AddIcon} title={"Add Channel"} addChannelOption/>
            {channels.map(channel =>(
                <SidebarOption title={channel.name} id={channel.id}/>
            ))}
        </div>
    )
}

export default Sidebar
