import NavBar from "./NavBar";
import Search from "./Search";
import Chats from "./Chats"

export default function SideBar () {
    return(
        <>
       <div className="sidebar">
       <NavBar/>
       <Search/>
       <Chats/>
       </div>
        </>
    );
}