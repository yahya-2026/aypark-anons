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
        <h1 className="text-5xl font-bold">AYPARK GİRİŞ</h1>

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

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-5xl font-bold mb-6">AYPARK ANONS SİSTEMİ</h1>

      <button onClick={() => play("/anil.mp3")} className="bg-green-500 px-10 py-4 rounded-xl text-2xl">Anıl Bey Kasa</button>
      <button onClick={() => play("/muhammet.mp3")} className="bg-blue-500 px-10 py-4 rounded-xl text-2xl">Muhammet Bey Kasa</button>
      <button onClick={() => play("/fatih.mp3")} className="bg-purple-500 px-10 py-4 rounded-xl text-2xl">Fatih Bey Kasa</button>
      <button onClick={() => play("/ayhan.mp3")} className="bg-yellow-500 text-black px-10 py-4 rounded-xl text-2xl">Ayhan Bey Kasa</button>
      <button onClick={() => play("/ramazan.mp3")} className="bg-red-500 px-10 py-4 rounded-xl text-2xl">Ramazan Bey Kasa</button>
      <button onClick={() => play("/songul.mp3")} className="bg-pink-500 px-10 py-4 rounded-xl text-2xl">Songül Hanım Kasa</button>
      <button onClick={() => play("/tunahan.mp3")} className="bg-indigo-500 px-10 py-4 rounded-xl text-2xl">Tunahan Bey Kasa</button>
      <button onClick={() => play("/yeter.mp3")} className="bg-orange-500 px-10 py-4 rounded-xl text-2xl">Yeter Hanım Kasa</button>
      <button onClick={() => play("/gulsum.mp3")} className="bg-teal-500 px-10 py-4 rounded-xl text-2xl">Gülsüm Hanım Kasa</button>
      <button onClick={() => play("/kapanis10dakka.mp3")} className="bg-gray-500 px-10 py-4 rounded-xl text-2xl">Kapanış 10 Dakika</button>
      <button onClick={() => play("/cumakapanis.mp3")} className="bg-white text-black px-10 py-4 rounded-xl text-2xl">Cuma Namazı Anonsu</button>

      <button onClick={cikisYap} className="bg-red-800 mt-6 px-8 py-3 rounded text-lg">
        Çıkış Yap
      </button>
    </main>
  );
}