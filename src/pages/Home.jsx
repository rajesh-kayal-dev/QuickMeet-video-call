import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleJoin = () => {
    if (input.trim()) {
      navigate(`/room/${input}`);
    }
  };
  const createMeeting =()=>{
        const RoomId = `rid-`+Date.now().toString()+Math.floor(Math.random())
        navigate(`/room/${RoomId}`)

  }

  return (
    <div id="home">
      <h1 className="title">Join a Meeting</h1>
      <p className="subtitle">Enter a Room ID to connect instantly</p>

      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Enter Room ID"
      />
      <button onClick={createMeeting}>Create New meeting</button>
      <button  onClick={handleJoin}>Join Now</button>
    </div>
  );
};

export default Home;
