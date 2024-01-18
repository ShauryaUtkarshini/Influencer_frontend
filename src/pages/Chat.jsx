import React, { useState } from 'react'
import {io} from "socket.io-client"

export default function Chat() {


    const [message, setMessage] = useState()
    const socket = io("http://localhost:3000",{transports:["websocket"]})

    function send(){
        socket.emit("message",message)
    }


  return (
    <div className='bg-green-900'>
        <input onChange={(e)=>setMessage(e.target.value)} type="text" placeholder='Enter Message' />
        <button onClick={send}> Send </button>

    </div>
  )
}
