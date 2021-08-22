import react, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { NavLink } from 'react-router-dom';
 import EditIcon from '@material-ui/icons/Edit';
 import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch,useSelector } from 'react-redux';




const Dashboard = ()=>{

    const dispatch = useDispatch();

    const [list,setLists] = useState([]);

    const showSechionList = ()=>{
        var jsondata = localStorage.getItem("Sections");
        var jsonparse = JSON.parse(jsondata);
        if(jsonparse!=null){
            setLists(jsonparse)
            dispatch({type:"ADD_SECTION",payload:jsonparse})

        }else{
            setLists([])
        }
    }
    
    useEffect(()=>{
        showSechionList();
        
    },[]);

    const delSection = (key,sectionname)=>{
       let data =JSON.parse(localStorage.getItem("Sections"));

       let filterdata = data.filter((value,index)=>{
           return value.sectionname !== sectionname
       })

       localStorage.setItem("Sections",JSON.stringify(filterdata));
       showSechionList();
       
    }

    const EditSection = (sectionname)=>{
        console.log(sectionname);
        let data={sectionname}
        dispatch({type:"EDIT_USER",payload:data})
    }


    const ValidUser=()=>{
        let getdata = JSON.parse(localStorage.getItem('Userdetails'));
        if(getdata!=null){
                return(
                    <>
                                                <Button variant="contained" color="primary" className="add_btn">
                                                <AddIcon></AddIcon>
                                                <NavLink exact to="/dashboard/adduser" className="edituser" activeStyle={{
                                                        fontWeight: "bold",
                                                        color: "white",
                                                        textDecoration:"none"
                                                    }}>Add Section</NavLink>
                                                </Button>
    
                                                <table class="table">
                                                    <thead class="thead-dark">
                                                        <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Section name</th>
                                                        <th scope="col">From port</th>
                                                        <th scope="col">To port</th>
                                                        <th scope="col">Cost</th>
                                                        <th scope="col">Operation</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            list.map((value,index)=>{
                                                                const {sectionname,fromport,toport,cost} = value
                                                                return(
                                                                    <>
                                                                        <tr key={index+1}>
                                                                        <th scope="row">{index+1}</th>
                                                                        <td>{sectionname}</td>
                                                                        <td>{fromport}</td>
                                                                        <td>{toport}</td>
                                                                        <td>{cost}</td>
                                                                        <td><NavLink exact to={`/dashboard/adduser/${sectionname}`} onClick={()=>EditSection(sectionname)}>
                                                                            <EditIcon className="edit"></EditIcon></NavLink>
                                                                        <DeleteIcon id={index} className="del ml-3" onClick={()=>delSection(index+1,sectionname)}/>
                                                                        </td>
                                                                        </tr>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    
                                                    </tbody>
                                                </table>
                    </>
                )
            }else{
                return(
                    <>
                    <div className="spinner">
                    <div class="spinner-border text-primary" role="status">
                         <span class="sr-only">Loading...</span>
                    </div>

                    </div>
                    </>
                )
            }


    }



    return(
        <>
       
            <ValidUser />
        
        </>
    )
}

export default Dashboard;