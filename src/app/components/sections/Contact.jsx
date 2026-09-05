"use client";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function handleFormSubmission(e) {
    e.preventDefault();
    const response = fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
    if (response.ok) {
      alert("message sent successfully");
    }
  }
  return (
    <>
      <section id="contact">
        <h1>Let us Connect</h1>
        <h5>Interested in working together?</h5>
        <div>
          <form onSubmit={handleFormSubmission}>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={() => setName(e.target.value)}
              placeholder="your name"
            />
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={() => setEmail(e.target.value)}
              placeholder="your email"
            />
            <label>Message</label>
            <textarea
              value={message}
              onChange={() => setMessage(e.target.value)}
              placeholder="your message"
            />
            <button type="submit">Send message</button>
          </form>
        </div>
        <a href="http://www.linkedin.com/in/jana-al-abed-97772335a">linkedin</a>
        <a href="https://github.com/janaalabed">github</a>
        <label>Email</label>
        janaalabed0101@gmail.com
      </section>
    </>
  );
}
