"use client";

import { useState } from "react";

export default function BlogContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const FORMSPREE_ID = "xbdwplnr";

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...form, source: "Blog Contact Page" })
      });
      
      if (response.ok) {
        alert("Sua mensagem foi enviada com sucesso!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Ops, ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.");
      }
    } catch {
      alert("Erro ao enviar a mensagem. Verifique sua conexão.");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "1rem",
    border: "1px solid #e5e5e5",
    fontFamily: "var(--font-body)",
    fontSize: "14px",
    color: "var(--gray-900)",
    background: "transparent",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className="block font-body text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--gray-900)")}
            onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")}
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-body text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--gray-900)")}
            onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block font-body text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: "vertical" }}
          onFocus={(e) => (e.target.style.borderColor = "var(--gray-900)")}
          onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")}
        />
      </div>

      <button
        type="submit"
        className="mt-4 px-10 py-3 border border-gray-900 text-gray-900 font-display text-xs uppercase tracking-widest font-bold hover:bg-gray-900 hover:text-white transition-colors self-start"
      >
        Submit
      </button>
    </form>
  );
}
