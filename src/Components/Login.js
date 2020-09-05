import React from 'react'
import {Card, CardContent, Button} from '@material-ui/core'
import {auth, provider} from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'
import './Styles/Login.css'

function Login() {

    const [state, dispatch] = useStateValue()

    const signIn = () =>{
        auth.signInWithPopup(provider)
            .then((result) =>{
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch((error) =>{
                alert(error.message)
            })
    }

    return (
        <div className="login">
            <Card className="login__container">
                <CardContent className="login__content">
                    <img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" alt=""/> 
                    <h1> Sign in to this Slack Room</h1>
                    <p>slackroom.slack.com</p>
                    <Button onClick={signIn}>Sign in with Google</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login
