import React from 'react'
import Chat from './Components/Chat'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Login from './Components/Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useStateValue } from './StateProvider'
import './Styles/App.css';

function App() {

  const [{user}] = useStateValue()

  return (
    <div className="app">
      <Router>
      
        {!user ?(
          <Login/>
        ):(
          <>
            <div className="app__header"><Header/></div>
            <div className="app__body">
              <Sidebar/>
              <Switch>
                <Route path="/room/:roomId"><Chat/></Route>
                <Route path="/"><h1>Hello</h1></Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  )
}

export default App
