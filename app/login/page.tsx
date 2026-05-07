"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [girisYapildi, setGirisYapildi] = useState(false);

  useEffect(() => {
    const kontrol = localStorage.getItem("aypark_giris");

    if (kontrol === "ok") {
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

  if (!girisYapildi) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-5">
        <h1 className="text-5xl font-bold">AYPARK GİRİŞ</h1>

        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-5 py-3 rounded text-black w-72"
        />

        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-5 py-3 rounded text-black w-72"
        />

        <button
          onClick={girisYap}
          className="bg-green-500 hover:bg-green-600 px-10 py-3 rounded text-xl"
        >
          Giriş Yap
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-5">
      <h1 className="text-5xl font-bold text-green-400">
        Hoş Geldiniz
      </h1>

      <p className="text-2xl">AYPARK ANONS SİSTEMİ</p>

      <button
        onClick={cikisYap}
        className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded text-lg"
      >
        Çıkış Yap
      </button>
    </main>
  );
}