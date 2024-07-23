import {useState} from "react";
import {useNavigate,Link} from "react-router-dom";
import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase";
export default function Login () {

const [error,setError]=useState(false);
const navigate=useNavigate();

    const handleSubmit= async(event)=>{
        event.preventDefault();
        
        const email=event.target[0].value;
        const password=event.target[1].value;
        
try{
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
   
}
catch(error){
    setError(true);
}
        
    }
    return(
        <>
 <div className="form-container">
            <div className="form-wrapper">
                <span className="logo">Fire Chat</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <button>Login</button>
                    {error && <span>Something went wrong</span>}
                </form>
                <p>Don't have an account? <Link to="/register">Signup</Link></p>
            </div>
        </div>    
        </>
    );
}