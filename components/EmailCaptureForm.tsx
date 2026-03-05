"use client";

import { FormEvent, useState } from "react";

type EmailCaptureFormProps = {
  source?: string;
};

const waitingNotice =
  "Demand is high and access is in private beta. Leave your email and we will notify you first.";

export default function EmailCaptureForm({
  source = "homepage",
}: EmailCaptureFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      const data = (await response.json()) as { message?: string };

      if (response.ok) {
        setStatus("success");
        setMessage(
          data.message ||
            "Submitted. We will contact you when new OpenClaw API slots open."
        );
        setEmail("");
        return;
      }

      setStatus("error");
      setMessage(data.message || "Submit failed. Please try again.");
    } catch {
      setStatus("error");
      setMessage("Network error. Please retry in a minute.");
    }
  }

  return (
    <div className="email-block">
      <p className="section-copy">{waitingNotice}</p>
      <form className="email-form" onSubmit={onSubmit}>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter email for early access"
          required
          aria-label="Email address"
        />
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Submitting..." : "Join Waitlist"}
        </button>
      </form>
      {status !== "idle" ? (
        <p className={`form-message ${status === "success" ? "ok" : "error"}`}>
          {message}
        </p>
      ) : null}
    </div>
  );
}
