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
          className="p-3 rounded text-black bg-white"
        />

        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 rounded text-black bg-white"
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
  <main className="min-h-screen bg-black text-white p-10">

    <h1 className="text-5xl font-bold text-center mb-10">
      AYPARK ANONS SİSTEMİ
    </h1>

    <div className="grid grid-cols-3 gap-10">

      {/* Erkek Personel */}
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-blue-400 mb-3">
          Erkek Personel
        </h2>

        <button onClick={() => play("/anil.mp3")} className="bg-blue-600 p-5 rounded-xl text-2xl">Anıl Bey</button>

        <button onClick={() => play("/muhammet.mp3")} className="bg-blue-600 p-5 rounded-xl text-2xl">Muhammet Bey</button>

        <button onClick={() => play("/fatih.mp3")} className="bg-blue-600 p-5 rounded-xl text-2xl">Fatih Bey</button>

        <button onClick={() => play("/ayhan.mp3")} className="bg-blue-600 p-5 rounded-xl text-2xl">Ayhan Bey</button>

        <button onClick={() => play("/ramazan.mp3")} className="bg-blue-600 p-5 rounded-xl text-2xl">Ramazan Bey</button>

        <button onClick={() => play("/tunahan.mp3")} className="bg-blue-600 p-5 rounded-xl text-2xl">Tunahan Bey</button>
      </div>

      {/* Bayan Personel */}
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-pink-400 mb-3">
          Bayan Personel
        </h2>

        <button onClick={() => play("/songul.mp3")} className="bg-pink-600 p-5 rounded-xl text-2xl">Songül Hanım</button>

        <button onClick={() => play("/yeter.mp3")} className="bg-pink-600 p-5 rounded-xl text-2xl">Yeter Hanım</button>

        <button onClick={() => play("/gulsum.mp3")} className="bg-pink-600 p-5 rounded-xl text-2xl">Gülsüm Hanım</button>
      </div>

      {/* Genel Anons */}
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-green-400 mb-3">
          Genel Anons
        </h2>

        <button onClick={() => play("/cumakapanis.mp3")} className="bg-green-600 p-5 rounded-xl text-2xl">
          Cuma Namazı
        </button>

        <button onClick={() => play("/kapanis10dakka.mp3")} className="bg-red-600 p-5 rounded-xl text-2xl">
          Kapanış 10 Dakika
        </button>

        <button onClick={cikisYap} className="bg-gray-700 p-5 rounded-xl text-2xl mt-10">
          Çıkış Yap
        </button>
      </div>

    </div>

  </main>
);