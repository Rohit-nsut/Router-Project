import React, { useState } from "react";
import toast from "react-hot-toast";
import data from "../Components/data"
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";



const SignUp = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    const [profession, setProfession] = useState(true);
    // true -> student && false -> Instructor
    function changeProfessionHandler () {
        setProfession(!profession);
    }

    const [formData, setFormData] = useState({
        firstName:"", lastName:"", email:"", createPassword:"",confirmPassword:""
    });

    function changeHandler (event) {
        setFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]:event.target.value
            }
        })
    }

    const navigate = useNavigate();

    const [showCreatePassword, setShowCreatePassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    

    function submitHandler (event) {
        event.preventDefault();
        if(formData.createPassword != formData.confirmPassword){
            toast.error("Password Not Match");
            return ;
        }
        else{
            toast.success("Account Created");
            setIsLoggedIn("true");
            const accountData = {
                ...formData
            };
            console.log("Printing account data");
            console.log(accountData);
            navigate("/Dashboard");
        }        
    }

    return (

        // <div className=" flex justify-center items-center bg-[#050c18]">

            <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto bg-[#050c18] gap-10">
                
                {/* form */}
                <div className=" max-w-[450px] ">
                    <h1 className="text-3xl font-semibold text-white">Join the millions learning to code with StudyNotion for free</h1>
                    <p className="text-lg text-gray-500 mt-4">Build skills for today, tomorrow, and beyond.</p>
                    <p className="text-lg font-serif text-blue-400 ">Education to future-proof your career.</p>

                    <span className="bg-[#161D29] flex p-1 rounded-full text-white gap-3 my-5 w-max">
                        <button className={`rounded-full py-2 px-5 text-lg ${profession ? "bg-black" : "bg-[#161D29] text-gray-400"}`  } onClick={changeProfessionHandler} >Student</button>
                        <button className={`rounded-full py-2 px-5 text-lg ${!profession ? "bg-black" : "bg-[#161D29] text-gray-400"}` } onClick={changeProfessionHandler}>Instructor</button>
                    </span>

                    <form className="flex flex-col text-white mt-5 gap-1" onSubmit={submitHandler}>

                        <div className="flex  justify-between mb-3">
                            <div className="flex flex-col gap-1 w-[48%]">
                                <label>First Name <span className=" text-red-500">*</span></label>
                                <input type="text"
                                    required
                                    placeholder="Enter first name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={changeHandler}
                                    className="bg-[#161D29] text-base shadow-sm shadow-white rounded-md p-2 h-12"
                                    />
                            </div>
                            <div className="flex flex-col gap-1 w-[48%]" >
                                <label>Last Name <span className=" text-red-500">*</span></label>
                                <input type="text"
                                    required
                                    placeholder="Enter last name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={changeHandler}
                                    className="bg-[#161D29] text-base shadow-sm shadow-white rounded-md p-2 h-12"
                                    />
                            </div>
                        </div>

                        <label>Email Address <span className=" text-red-500">*</span></label>
                        <input type="email"
                            required
                            name="email"
                            value={formData.email}
                            onChange={changeHandler}
                            className="bg-[#161D29] text-base shadow-sm shadow-white rounded-md p-2 h-12 mb-3"
                            placeholder="Enter email address"
                            />

                        <div className="flex  justify-between mb-3 ">
                            <div className="flex flex-col gap-1 w-[48%] relative">
                                <label>Create Password <span className=" text-red-500">*</span></label>
                                <input type={showCreatePassword ? ("text") : ("Password")}
                                    required
                                    placeholder="Enter Password"
                                    name="createPassword"
                                    value={formData.createPassword}
                                    onChange={changeHandler}
                                    className="bg-[#161D29] text-base shadow-sm shadow-white rounded-md p-2 h-12"
                                    />
                                <span onClick={()=>{setShowCreatePassword(!showCreatePassword)}} className="absolute right-2 bottom-4" >
                                    {!showCreatePassword ? (<FaEyeSlash/>) : (<FaEye/>)}
                                </span>
                            </div>
                            <div className="flex flex-col gap-1 w-[48%] relative" >
                                <label>Confirm Password <span className=" text-red-500">*</span></label>
                                <input 
                                    required
                                    type={showConfirmPassword ? ("text") : ("Password")}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={changeHandler}
                                    placeholder="Confirm Password"
                                    className="bg-[#161D29] text-base shadow-sm shadow-white rounded-md p-2 h-12"
                                    />
                                <span onClick={()=>{setShowConfirmPassword(!showConfirmPassword)}} className="absolute right-2 bottom-4" >
                                    {!showConfirmPassword ? (<FaEyeSlash/>) : (<FaEye/>)}
                                </span>
                            </div>
                        </div>

                        <button className="bg-[#FFD60A] text-black py-2 font-semibold rounded-md mt-7">Create Account</button>

                        <div className="flex justify-between items-center my-5 ">
                            <div className="bg-[#161D29] shadow-sm shadow-white w-44 h-[0.1px]"></div>
                            <p>OR</p>
                            <div className="bg-[#161D29] shadow-sm shadow-white w-44 h-[0.1px]"></div>
                        </div>

                    </form>

                    <button className=" text-white w-full gap-2  flex py-3 rounded-lg justify-center items-center shadow-sm shadow-white">
                            <img src={data[1]} width="20" height="20" className="bg-pink-600 "  />
                            Sign in with Google
                    </button>

                </div>

                <div>
                    <div className="relative ">
                        <img src="https://studynotion-frontend.vercel.app/static/media/frame.3a238e5f26d676376e1d.png" width="450" height="430" loading="lazy"/>
                        {/* <div className="absolute top-[-1rem] left-[-1rem]"> */}
                        <img src="https://studynotion-frontend.vercel.app/static/media/signup.acaf50bcb11d9aec44b4.webp" width="450" height="430" loading="lazy" class="absolute -top-3 right-3" />
                        {/* </div> */}
                    </div>
                </div>
            </div>

        // </div>
    )
}


export default SignUp;