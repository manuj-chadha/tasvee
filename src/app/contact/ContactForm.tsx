"use client";

import { Clock, Send } from "lucide-react";
import { useState } from "react";
import { contactQueryOptions } from "@/lib/site-config";

type FormState = {
  name: string;
  email: string;
  phone: string;
  query: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  query: contactQueryOptions[0],
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong");
      }

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send message",
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-tasvee-red focus:outline-none focus:ring-1 focus:ring-tasvee-red"
          placeholder="Enter your full name"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-tasvee-red focus:outline-none focus:ring-1 focus:ring-tasvee-red"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-tasvee-red focus:outline-none focus:ring-1 focus:ring-tasvee-red"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="query" className="mb-1 block text-sm font-medium">
          Select Query
        </label>
        <select
          id="query"
          name="query"
          value={form.query}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-tasvee-red focus:outline-none focus:ring-1 focus:ring-tasvee-red"
        >
          {contactQueryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-tasvee-red focus:outline-none focus:ring-1 focus:ring-tasvee-red"
          placeholder="Tell us how we can help..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-tasvee-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 disabled:opacity-60 sm:w-auto"
      >
        <Send className="h-4 w-4" />
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      <p className="flex items-center gap-2 text-xs text-gray-500">
        <Clock className="h-4 w-4 text-tasvee-red" />
        We will get back to you soon!
      </p>

      {status === "success" && (
        <p className="rounded-xl bg-green-50 p-4 text-sm text-green-700">
          Thank you! Your message has been sent successfully.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-xl bg-red-50 p-4 text-sm text-red-700">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
