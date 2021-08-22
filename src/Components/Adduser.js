import react, { useEffect, useState } from 'react';
import { NavLink} from 'react-router-dom';
import { useDispatch } from 'react-redux';

const getItemsFromStorage = ()=>{
    let jsondata = localStorage.getItem("Sections");
    let jsonparse = JSON.parse(jsondata);
    if(jsonparse==null){
        return []
    }else{
        return jsonparse;
    }

}

const Adduser = ()=>{
    
    const dispatch = useDispatch();
    const [section,setSection] = useState({
        sectionname:"",
        fromport:"",
        toport:"",
        cost:""
    });
    
    const [items,setItems]=useState(getItemsFromStorage())
    
    const SectionValue = (event)=>{
        const {name,value} = event.target;
        setSection({...section,[name]:value})
    }
    
    const AddSection =(event)=>{
        event.preventDefault();
        setItems([...items,section]);
        setSection({
            sectionname:"",
            fromport:"",
            toport:"",
            cost:""
        })
        
        dispatch({type:"SHOW_SECTION",payload:items});

    }
    
    
    useEffect(()=>{
        localStorage.setItem("Sections",JSON.stringify(items));
    },[items])


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
                <input type="text" className="form-control" id="SectionName" name="sectionname" value={section.sectionname} onChange={SectionValue} placeholder="Enter Section Name" autoComplete="off"/>
            </div>
            <div className="form-group">
                <label for="Fromport">From Port</label>
                <input type="text" className="form-control" id="Fromport" name="fromport" value={section.fromport} onChange={SectionValue} placeholder="From Port" autoComplete="off"/>
            </div>
            <div className="form-group">
                <label for="ToPort">To Port</label> 
                <input type="text" className="form-control" id="ToPort" name="toport" value={section.toport} onChange={SectionValue} placeholder="To Port" autoComplete="off"/>
            </div>
            <div className="form-group">
                <label for="Cost">Cost</label>
                <input type="text" className="form-control" id="Cost" name="cost" value={section.cost} onChange={SectionValue} placeholder="Enter Cost" autoComplete="off"/>
                </div>

                <button className="btn btn-primary" name="submit" type="submit" onClick={AddSection}>Submit</button>
                                                
            </form>

        </div>
        </>
    )
}

export default Adduser;