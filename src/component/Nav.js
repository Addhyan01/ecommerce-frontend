import React   from 'react';
import { Link, useNavigate  } from 'react-router-dom'

const Nav=()=>{
    
    const auth = localStorage.getItem("user");
   
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/sigup");
        
    }



    return(
        <div>
           {

                auth ? <ul className='nav-ul'>
                            <li><Link to="/">Products</Link></li>
                            <li><Link to="/add-product">Add Products</Link></li>
                            {/* <li><Link to="/update">Update Products</Link></li> */}
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/signup" onClick={logout}>Logout ({JSON.parse(auth).name})</Link></li>
                    </ul> :
                            <ul className='nav-ul nav-right'>
                                <li><Link to="/SignUp">SignUp</Link></li>
                                <li><Link to="/login">Login</Link></li>
                            </ul>
                            
                                 



           } 
        </div>
    )
}

export default Nav;