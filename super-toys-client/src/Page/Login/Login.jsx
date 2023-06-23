import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Form, Link } from "react-router-dom";
import {FaGoogle,FaGithub} from "react-icons/fa";
import {  useLocation , useNavigate } from 'react-router-dom';
import login from "../../assets/login.png"
import useTitle from "../../hooks/useTitle";
const Login = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const location = useLocation()
    const from = location.state?.from.pathname || "/"
    const navigate = useNavigate();
    useTitle("Log in")
    const {googleSignIn,gitHubUser,signInUser} = useContext(AuthContext)
    const handleLogin=(event)=> {
        event.preventDefault();
        setSuccess("");
        setError("");
        const form = event.target
        const password = form.password.value;
        const email = form.email.value;
        signInUser(email,password)

        .then(result => {
              const signInUser = result.user
              console.log(signInUser);
              form.reset();
              setSuccess("Your login successfully");
              navigate(from, {replace: true})
        })
        .catch(error => {
            setError(error);
        })
    }
    const handleGoogle =() => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
            setSuccess("User login Successfully")
            navigate(from, {replace: true})
            
        })
        .catch((error) => {
            setError(error.message);
        })
    }

    const handleGitHub = () =>{
        gitHubUser()
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true})
        })
        .catch((error) => {
            setError(error.message);
        })
    }
    return (
        <div>
        <Form onSubmit={handleLogin} className="hero min-h-screen bg-base-200">
                <div>
                <h1 className="text-5xl font-bold mb-10 text-center">Log in</h1>
                <div className="flex w-[90%] text-center justify-center  items-center">
                        <div className="-ml-32">
                            <img className="w-[70%] mx-auto" src={login} alt="" />
                        </div>
                    <div>
                        <div className="text-center lg:text-left">
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body flex flex-col justify-center m-auto">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email"className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" />
                            <label className="label">
                                <p>Do not Have an Account ? <Link className='text-[#2daae0]' to="/register">Register</Link> <br /></p>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn blue-light">Login</button>

                            <div className='mt-10  flex justify-between gap-2'>
                                <button className="p-2 rounded-lg text-sm  blue-light flex items-center gap-2" onClick={handleGoogle}>Login with Google <FaGoogle /></button>
                                <button className="p-2 rounded-lg text-sm  blue-light flex items-center gap-2" onClick={handleGitHub}><p>Login with GitHub</p> <FaGithub /></button>
                            </div>
                            </div>
                            <p className='text-red-700 mt-3'>{error}</p>
                            <p className='text-green-700 mt-3'>{success}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        </Form>
        </div>
    );
};

export default Login;