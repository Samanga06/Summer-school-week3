import { use, useState } from "react";
import './Register.css';

function Register({onRegister}) {
  const [eventName,setEventName] = useState("");
  const [attendeeName, setAttendeeName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventName || !attendeeName || !email) {
      alert("All fields required!");
      return;
    }
    onRegister({ eventName, attendeeName, email });
    alert("Event Registered!");
    setEventName(""); setAttendeeName(""); setEmail("");
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <label>Enter Event Name: </label>
      <input id="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} placeholder="Event Name"/><br />
      <label>Enter Attendee Name: </label>
      <input id="attendeeName" value={attendeeName} onChange={(e) => setAttendeeName(e.target.value)} placeholder="Your Name" /><br />
      <label>Enter Email Address: </label>
      <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /><br />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;