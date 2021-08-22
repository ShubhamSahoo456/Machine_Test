import react, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Register =()=>{

const [user,setUser] = useState({
    name:"",
    mobile:"",
    city:"",
    email:"",
    password:"",
    cpassword:""
});



const history = useHistory();

const dispatch = useDispatch();


const UserDetails = (event)=>{
    const {name , value} = event.target;
    setUser({...user,[name]:value})
}

const captureDetails = (e)=>{
    e.preventDefault();
    const jsonDetails = JSON.stringify(user)
    
    localStorage.setItem('Userdetails',jsonDetails)
    dispatch({type:"LOGIN_DETAILS",payload:user});
    history.push('/login');
}




    return(
        <>
        
<div className="container" id="wrap">
	<div className="row">
        <div className="col-md-8 mx-auto">
            <form>   
 
                <input type="text" name="name" value={user.name} onChange={UserDetails} className="form-control input-lg my-2" placeholder="Enter Name" autoComplete="off" /> 

                <input type="text" name="mobile" value={user.mobile} onChange={UserDetails} className="form-control input-lg my-2" placeholder="Enter Mobile number" autoComplete="off"/>
                
                <input type="text" name="city" value={user.city} onChange={UserDetails} className="form-control input-lg my-2" placeholder="Enter City" autoComplete="off"/>

                <input type="text" name="email" value={user.email} onChange={UserDetails} className="form-control input-lg my-2" placeholder="Your Email"  autoComplete="off"/>

                <input type="password" name="password" value={user.password} onChange={UserDetails} className="form-control input-lg my-2" placeholder="Password" autoComplete="off" />
                
                <input type="password" name="cpassword" value={user.cpassword} onChange={UserDetails} className="form-control input-lg my-2" placeholder="Confirm Password" autoComplete="off" />                    
                
              
                    <button className="btn btn-lg btn-primary btn-block signup-btn" type="submit" name="submit" onClick={captureDetails}>
                        Create my account</button>
            </form>          
        </div>
    </div>            
</div>

        </>
    )
}

export default Register;