import react from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ()=>{

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Navbar</a>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto mr-5">
      <li className="nav-item active">
            <NavLink to="/" activeStyle={{
                                        fontWeight: "bold",
                                        color: "grey",
                                        textDecoration:"none"
                                       }}
                    >
                Register
            </NavLink>
        </li>

        <li className="nav-item active ml-4 login">
            <NavLink to="/login" className="login" activeStyle={{
                                        fontWeight: "bold",
                                        color: "grey",
                                        textDecoration:"none"
                                       }}
                    >
                Login
            </NavLink>
        </li>
        </ul>
    </div>
    </nav>
            </>
        )
    }

export default Navbar;