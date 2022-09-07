import { Link } from "react-router-dom";
function Navbar() {
    return (
 
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="one container-fluid ">
                
                <a className="navbar-brand text-white" href="#">Navbar</a>
              
                <div class="collapse navbar-collapse justify-content-end ">
                    <ul class="navbar-nav">
                        <li class="nav-item ">
                        <Link to="/shop"><a className=" links nav-link active text-white" aria-current="page" >Shop</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/counter"><a className=" links nav-link active text-white"aria-current="page">Counter</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/aboutus"><a className=" links nav-link active text-white" aria-current="page">About us</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/signUp"><a className=" links nav-link active text-white" aria-current="page">SignUp</a></Link>
                        </li>
                        {/* <li class="nav-item">
                            <Link to="/SignIn"><a className=" links nav-link active text-white" aria-current="page">SignIn</a></Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
  
    );
}

export default Navbar;