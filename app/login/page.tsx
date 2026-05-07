"use client";

import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const girisYap = () => {
    if (username === "aypark" && password === "12345") {
      window.location.href = "/";
    } else {
      alert("Hatalı giriş");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-5">
      <h1 className="text-5xl font-bold">AYPARK GİRİŞ</h1>

      <input
        type="text"
        placeholder="Kullanıcı Adı"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="px-5 py-3 rounded text-black bg-white w-80"
      />

      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="px-5 py-3 rounded text-black bg-white w-80"
      />

      <button
        onClick={girisYap}
        className="bg-green-500 hover:bg-green-600 px-10 py-4 rounded-xl text-2xl"
      >
        Giriş Yap
      </button>
    </main>
  );
}