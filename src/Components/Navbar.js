import { NavLink } from "react-router-dom";
import data from "./data";
import { useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast"



const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    const navigate = useNavigate();

    return (
        <div className="bg-[#050c18] border-white ">

            <nav className="w-11/12 max-w-[1160px] mx-auto py-4">

                <div className="flex justify-between items-center">
                    
                    {/* image */}
                    <NavLink to="/">
                        <div>
                            <img src={data[0]} width="170px" height="32px" />
                        </div>
                    </NavLink>

                    <div className="flex gap-7 text-gray-300 text-lg">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/">About</NavLink>
                        <NavLink to="/">Contact</NavLink>
                    </div>

                    <div className="flex gap-5 text-white">

                        {
                            !isLoggedIn &&
                            <button className="py-2 px-3 shadow-sm shadow-white text-gray-400 rounded-md bg-[#161D29]" onClick={() => {navigate("/Login")}} >Log in</button>

                        }

                        {
                            !isLoggedIn &&
                            <button className="py-2 px-3 shadow-sm shadow-white text-gray-400 rounded-md bg-[#161D29]" onClick={() => {
                                navigate("/SignUp");
                            }}>Sign up</button>

                        }

                        {
                            isLoggedIn &&
                            <button className="py-2 px-3 shadow-sm shadow-white text-gray-400 rounded-md bg-[#161D29]" onClick={
                                () => {
                                    setIsLoggedIn(false);
                                    toast.success("Logged Out");
                                    navigate("/");
                                }
                            } >Log out</button>
                        }

                        {
                            isLoggedIn &&
                            <button className="py-2 px-3 shadow-sm shadow-white text-gray-400 rounded-md bg-[#161D29]" onClick={() => {navigate("/Dashboard")}} >Dashboard</button>
                        }

                    </div>

                </div>

            </nav>


        {/* <div className="h-screen  flex justify-center items-center text-white text-2xl">
            Home
        </div> */}



      </div>
    ) 
}

export default Navbar;