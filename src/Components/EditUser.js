import react, { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink} from 'react-router-dom';

const getItemsFromStorage = ()=>{
    let jsondata = localStorage.getItem("Sections");
    let jsonparse = JSON.parse(jsondata);
    if(jsonparse==null){
        return []
    }else{
        return jsonparse;
    }

}

const Edituser = ()=>{

    const userValid = useSelector(state=>state);
    
    const [user,setUser] = useState({
        sectionname:"",
        fromport:"",
        toport:"",
        cost:""
   })

   const [items,setItems] = useState(getItemsFromStorage());

    const SectionValue =(event)=>{
        const{name,value} = event.target;
        setUser({...user,[name]:value});
    }

    
    const showDetails = ()=>{
        const data= localStorage.getItem("Sections");
        const jsonuser = JSON.parse(data)
        
        let validuser = jsonuser.filter((val)=>{
            return val.sectionname===userValid[0].sectionname;
        })

        console.log(validuser);
        const[userdetails] = validuser;
        const {sectionname,fromport,toport,cost}=userdetails
        
    
        setUser({
            sectionname:sectionname,
            fromport,
            toport,
            cost
        })
    }


    const EditUser = (e)=>{
        e.preventDefault();
        let section = userValid[0].sectionname;

        const data= localStorage.getItem("Sections");
        const jsonuser = JSON.parse(data)
        
        let validuser = jsonuser.filter((val,index)=>{
            return val.sectionname===section;
        })

        const[userdetails] = validuser;
        let {sectionname,fromport,toport,cost}=userdetails;
        sectionname=user.sectionname;
        fromport=user.fromport;
        toport=user.toport;
        cost=user.cost;

        let newobj = {
            sectionname,fromport,toport,cost
        }

        let newusers = jsonuser.filter((val)=>{
            return val.sectionname!==section
        })

        // jsonuser[indexnumber]=newobj;
        localStorage.removeItem('Sections')
        setItems([...newusers,newobj])
        
    }
    
    useEffect(()=>{
        localStorage.setItem("Sections",JSON.stringify(items))
    },[items])
   

    useEffect(()=>{
        showDetails()
    },[])

    return(
        <>
        <div className="container">

    <button className="btn btn-primary"><NavLink to="/dashboard" activeStyle={{
                                        fontWeight: "bold",
                                        color: "white",
                                        textDecoration:"none"
                                       }}>Back to Dashboard</NavLink></button>

    <form>
                                        
            <div className="form-group">
                <label for="SectionName">Section Name</label>
                <input type="text" className="form-control" id="SectionName" name="sectionname" value={user.sectionname}  onChange={SectionValue} placeholder="Enter Section Name" autoComplete="off"/>
            </div>
            <div className="form-group">
                <label for="Fromport">From Port</label>
                <input type="text" className="form-control" id="Fromport" name="fromport" value={user.fromport} onChange={SectionValue} placeholder="From Port" autoComplete="off"/>
            </div>
            <div className="form-group">
                <label for="ToPort">To Port</label> 
                <input type="text" className="form-control" id="ToPort" name="toport" value={user.toport} onChange={SectionValue} placeholder="To Port" autoComplete="off"/>
            </div>
            <div className="form-group">
                <label for="Cost">Cost</label>
                <input type="text" className="form-control" id="Cost" name="cost" value={user.cost} onChange={SectionValue} placeholder="Enter Cost" autoComplete="off"/>
                </div>

                <button className="btn btn-primary" name="submit" type="submit" onClick={EditUser}>Submit</button>
                                        
    </form>

</div>
        </>
    )
}

export default Edituser;