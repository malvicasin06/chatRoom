import React from "react";
import '../css/Home.css';
import { Link } from "react-router-dom";
import io from "socket.io-client";
// import { CreateRoom } from "./CreateRoom";
// import { JoinRoom } from "./JoinRoom";
const socket=io.connect("http://localhost:5000");


function Home(){
    return (
        <div className="home-cont">
            <div className="links-cont">
                <Link to="./join-room" className="link-one"><p>Join Room </p></Link>
                <Link to="./create-room" className="link-two"><p>CreateRoom</p></Link>
            </div>
            
        </div>
    )
}
export {Home, socket};