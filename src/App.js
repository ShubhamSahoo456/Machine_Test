import react from 'react';
import {Switch ,Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Login from './Components/Login';
import Error from './Components/Error';
import Adduser from './Components/Adduser';
import Edituser from './Components/EditUser';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

const App = ()=>{

    return(
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Register}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/dashboard/adduser" component={Adduser}/>
                <Route exact path="/dashboard/adduser/:name" component={Edituser}/>
                <Route component={Error}/>
            </Switch>
        </>
    )
}

export default App;