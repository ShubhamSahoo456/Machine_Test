import react, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {Route} from 'react-router-dom';
import Dashboard from './Dashboard';

const Login =()=>{

    //const loginDetails = useSelector(state=>state);
    const dispatch = useDispatch();
    const history = useHistory();
    const [login,setLogin] = useState({
        email:"",
        password:""
    })

    const setUserLoginDetails = (event)=>{
        const {name,value} = event.target;
        setLogin({...login,[name]:value})
    }

    const validateDetails = (event) =>{
        event.preventDefault();
        let jsondata = JSON.parse(localStorage.getItem('Userdetails'));
        // console.log(jsondata.email);
        // console.log(login.email);
        // console.log(login.password);

        if(jsondata.email===login.email && jsondata.password===login.password){
            let data={status:true};
            let jsonstatus = JSON.stringify(data);
            dispatch({type:"VALIDATE_USER",payload:jsonstatus});
            <Route exact path="/dashboard" component={Dashboard}/>
            history.push('/dashboard');
        }else{
            let data={status:true};
            let jsonstatus = JSON.stringify(data);
            dispatch({type:"VALIDATE_USER",payload:jsonstatus})
            window.alert('invalid login details');
        }
        
    }

    
    return(
        <>
        <div className="container">
    

    <div className="omb_login">

		<div className="row omb_row-sm-offset-3">
			<div className="col-md-6 my-5 mx-auto">	
			    <form>
					<div className="input-group my-2">
						
						<input type="text" className="form-control" name="email" value={login.email} onChange={setUserLoginDetails} autoComplete="off" placeholder="Enter Your Email" />
					</div>
										
					<div className="input-group my-2">
						
						<input  type="password" className="form-control" name="password" value={login.password} onChange={setUserLoginDetails} autoComplete="off" placeholder="Enter Password" />
					</div>

					<button className="btn btn-lg btn-primary btn-block" type="submit" name="submit" onClick={validateDetails}>Sign in</button>
				</form>
			</div>
    	</div>
	    	
	</div>



        </div>
        </>
    )
}

export default Login;