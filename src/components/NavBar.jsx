import { useContext } from "react";
import { auth } from "../firebase";
import Add from "../Images/profile.jpg"
import {signOut} from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
export default function NavBar(){
    const {currentUser}=useContext(AuthContext)

    return(
        <>
        <div className="nav">
            <span className="logo">Fire Chat</span>
            <div className="info">
              <img src={currentUser.photoURL} alt="" />
              <span className="name">{currentUser.displayName}</span>
              <button onClick={()=>signOut(auth)}>Logout</button>
            </div>
            
        </div>
        </>
    );
} 