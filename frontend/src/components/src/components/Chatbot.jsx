import { useState } from "react";
import axios from "axios";

export default function Chatbot() {
  const [msg, setMsg] = useState("");
  const [reply, setReply] = useState("");

  const send = async () => {
    const res = await axios.post("http://localhost:5000/chatbot", { message: msg });
    setReply(res.data.reply);
  };

  return (
    <div>
      <input onChange={e => setMsg(e.target.value)} placeholder="Ask AI..." />
      <button onClick={send}>Send</button>
      <p>{reply}</p>
    </div>
  );
}
