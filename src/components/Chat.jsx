import Video from "../Images/video-camera.png"
import Add from "../Images/add-friend.png"
import More from "../Images/more.png"
import Messages from "./Messages";
import Input from "./Input";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";


export default function Chat () {
    const {data}=useContext(ChatContext)
    return(
        <>
       <div className="chat">
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    <img src={Video} alt="" />
                    <img src={Add} alt="" />
                    <img src={More} alt="" />

                </div>
            </div>
            <Messages/>
            <Input/>
       </div>
        </>
    );
}