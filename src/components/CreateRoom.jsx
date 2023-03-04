import React, {useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { socket } from '../components/Home'
import Chat from "./Chat";
import '../css/FormPage.css'


function CreateRoom(){
    const [name,setName]=useState('');
    const [room,setRoom]=useState('');
    // const [key,setKey]=useState('');
    const [log,setLog]=useState(false);
    const [id,setId]=useState('');

    const create=(e)=>{
        e.preventDefault();
        socket.emit("createRoom",({name,room}));
        socket.on("roomConfirm",(id)=>{
            setLog(true);
            console.log(id);
        })
    }
    useEffect(()=>{
        socket.on("connect",()=>{
            setId(socket.id);
        })
    })

    return (
        <div className="form-page-cont">
            {
                log
                ? < Chat userId={id} />
                :  <div className="form-cont">
                        <form onSubmit={create}>
                            <input type="text" value={name} placeholder="Name" required onChange={e=>setName(e.target.value)} />
                            <input type="text" value={room} placeholder="Room" required onChange={e=>setRoom(e.target.value)} />
                            {/* <input type="text" value={key} placeholder="key" required onChange={e=>setKey(e.target.value)} /> */}
                            <input type="submit" value="Create Room" />
                        </form>
                    </div>
            }
        </div>
    )
}
export {CreateRoom}