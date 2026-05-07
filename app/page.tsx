"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [girisYapildi, setGirisYapildi] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("aypark_giris") === "ok") {
      setGirisYapildi(true);
    }
  }, []);

  const girisYap = () => {
    if (username === "aypark" && password === "12345") {
      localStorage.setItem("aypark_giris", "ok");
      setGirisYapildi(true);
    } else {
      alert("Hatalı giriş");
    }
  };

  const cikisYap = () => {
    localStorage.removeItem("aypark_giris");
    setGirisYapildi(false);
  };

  const play = (file: string) => {
    new Audio(file).play();
  };

  if (!girisYapildi) {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-5">
      
      <h1 className="text-5xl font-bold">
        AYPARK GİRİŞ
      </h1>

      <input
        type="text"
        placeholder="Kullanıcı adı"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-3 rounded text-black w-72"
      />

      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-3 rounded text-black w-72"
      />

      <button
        onClick={girisYap}
        className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded"
      >
        Giriş Yap
      </button>

    </main>
  );
}