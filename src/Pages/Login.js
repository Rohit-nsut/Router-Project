import React, { useState } from "react";
import data from "../Components/data"
import { FaEye, FaEyeSlash } from "react-icons/fa";


import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        Email:"", Password:""
    });

    function changeHandler (event) {
        setFormData((prevState) => {
            return {
                ...prevState,
                [event.target.name]:event.target.value
            }
        })
    }

    const [showPassword, setShowPassword] = useState(false);


    function submitHandler (event) {
        event.preventDefault();
        setIsLoggedIn(true); 
        toast.success("Logged In");
        navigate("/Dashboard");

    }

    return (
        // <div className=" h-screen flex justify-center items-center bg-[#050c18]">

            <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto bg-[#050c18] gap-12">
                
                {/* form */}
                <div className=" max-w-[450px] w-1/2">
                    <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
                    <p className="text-lg text-gray-500 mt-4">Build skills for today, tomorrow, and beyond.</p>
                    <p className="text-lg font-serif text-blue-400 ">Education to future-proof your career.</p>

                    <form className="flex flex-col text-white mt-5 gap-2" onSubmit={submitHandler}>

                        <label>Email Address <span className=" text-red-500">*</span></label>
                        <input required type="email" className="bg-[#161D29] text-base shadow-sm shadow-white rounded-md p-2 h-12 mb-3"
                            placeholder="Enter email address"
                            name="Email"
                            value={formData.Email}
                            onChange={changeHandler}
                            />

                        <label>Password <span className=" text-red-500">*</span></label>

                        <div className="relative">

                        <input required type={showPassword ? ("text") : ("Password")} className="bg-[#161D29] text-base shadow-sm shadow-white rounded-md p-2 h-12 w-full relative"
                            placeholder="Enter Password"
                            name="Password"
                            value={formData.Password}
                            onChange={changeHandler}
                            />

                            <span onClick={()=>{setShowPassword(!showPassword)}} className="absolute right-2 top-4   " >
                                {!showPassword ? (<FaEyeSlash/>) : (<FaEye/>)}
                            </span>

                        </div>

                            
                        <div className="relative">

                            <button className="text-blue-300 text-xs absolute right-0">Forgot Password</button>
                        </div>
                        <button className="bg-[#FFD60A] text-black py-2 font-semibold rounded-lg mt-10">Sign In</button>

                        <div className="flex justify-between items-center ">
                            <div className="bg-[#161D29] shadow-sm shadow-white w-44 h-[0.1px]"></div>
                            <p>OR</p>
                            <div className="bg-[#161D29] shadow-sm shadow-white w-44 h-[0.1px]"></div>
                        </div>


                    </form>
                        <button className=" text-gray-400 w-full gap-2 mt-5 flex py-3 rounded-lg justify-center items-center shadow-sm shadow-white">
                            <img src={data[1]} width="20" height="20" className="bg-pink-600 "  />
                            Sign in with Google
                        </button>
                </div>

                <div className="relative max-w-[450px] mx-auto md:mx-0">
                    {/* <div className="relative w-[40%] "> */}
                        <img src="https://studynotion-frontend.vercel.app/static/media/frame.3a238e5f26d676376e1d.png" width="450" height="430" loading="lazy"/>
      
                        <img src="https://studynotion-frontend.vercel.app/static/media/login.5eeb0b81544a40330d4b.webp" width="450" height="430" loading="lazy" class="absolute z-10 -top-4 right-4" />
                        
                    {/* </div> */}
                </div>
            </div>

        // </div>
    )
}


export default Login;