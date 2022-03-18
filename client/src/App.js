import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './components/Login'
import CreateAccount from './components/CreateAccount'
import User from './components/User'
import UserEvents from './components/UserEvents'
import UserEdit from './components/UserEdit'
import EventPage from './components/EventPage'
import Events from './components/Events'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path = '/' element = {<Login/>} />
        <Route path = '/create-account' element = {<CreateAccount/>}/>
      </Routes>
      <Routes>
        <Route path = '/user/id' element = {<User/>}/>
        <Route path = '/user/id/events' element = {<UserEvents/>}/>
        <Route path = '/user/id/edit' element = {<UserEdit/>}/>
      </Routes>

      <Routes>
        <Route path ='/events/id' element = {<EventPage/>}/>
        <Route path ='/events' element={<Events/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
