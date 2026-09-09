"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.14c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleFormSubmission(e) {
    e.preventDefault();
    setStatus("sending");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
    setStatus(response.ok ? "sent" : "error");
  }

  return (
    <section id="contact" className="border-t border-border py-12 md:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="font-heading text-h3 font-semibold text-foreground">
            Let&apos;s connect
          </h2>
          <p className="mt-4 text-body text-muted-foreground">
            Interested in working together?
          </p>

          <div className="mt-8 space-y-3">
            <a
              href="mailto:janaalabed0101@gmail.com"
              className="flex items-center gap-3 text-body text-muted-foreground hover:text-primary"
            >
              <Mail size={18} />{" "}
              <span className="break-all">janaalabed0101@gmail.com</span>
            </a>
            <a
              href="http://www.linkedin.com/in/jana-al-abed-97772335a"
              className="flex items-center gap-3 text-body text-muted-foreground hover:text-primary"
            >
              <LinkedinIcon className="h-[18px] w-[18px]" /> LinkedIn
            </a>
            <a
              href="https://github.com/janaalabed"
              className="flex items-center gap-3 text-body text-muted-foreground hover:text-primary"
            >
              <GithubIcon className="h-[18px] w-[18px]" /> GitHub
            </a>
          </div>
        </div>

        <form onSubmit={handleFormSubmission} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              rows={5}
            />
          </div>
          <Button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </Button>
          {status === "sent" && (
            <p className="text-label text-success">
              Message sent successfully.
            </p>
          )}
          {status === "error" && (
            <p className="text-label text-destructive">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
