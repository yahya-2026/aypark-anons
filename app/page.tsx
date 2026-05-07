"use client";

export default function Home() {

  const playAnil = () => {
    const audio = new Audio("/anil.mp3");
    audio.play();
  };

  const playMuhammet = () => {
    const audio = new Audio("/muhammet.mp3");
    audio.play();
  };

  const playFatih = () => {
    const audio = new Audio("/fatih.mp3");
    audio.play();
  };

  const playAyhan = () => {
    const audio = new Audio("/ayhan.mp3");
    audio.play();
  };

  const playRamazan = () => {
    const audio = new Audio("/ramazan.mp3");
    audio.play();
  };

  const playSongul = () => {
    const audio = new Audio("/songul.mp3");
    audio.play();
  };

  const playTunahan = () => {
    const audio = new Audio("/tunahan.mp3");
    audio.play();
  };

  const playYeter = () => {
    const audio = new Audio("/yeter.mp3");
    audio.play();
  };

  const playGulsum = () => {
    const audio = new Audio("/gulsum.mp3");
    audio.play();
  };

  const playKapanis = () => {
    const audio = new Audio("/kapanis10dakka.mp3");
    audio.play();
  };

  const playCuma = () => {
    const audio = new Audio("/cumakapanis.mp3");
    audio.play();
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-5">

      <h1 className="text-5xl font-bold mb-10">
        AYPARK ANONS SİSTEMİ
      </h1>

      <button
        onClick={playAnil}
        className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-xl text-2xl"
      >
        Anıl Bey Kasa
      </button>

      <button
        onClick={playMuhammet}
        className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-5 rounded-xl text-2xl"
      >
        Muhammet Bey Kasa
      </button>

      <button
        onClick={playFatih}
        className="bg-purple-500 hover:bg-purple-600 text-white px-10 py-5 rounded-xl text-2xl"
      >
        Fatih Bey Kasa
      </button>

      <button
        onClick={playAyhan}
        className="bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-5 rounded-xl text-2xl"
      >
        Ayhan Bey Kasa
      </button>

      <button
        onClick={playRamazan}
        className="bg-red-500 hover:bg-red-600 text-white px-10 py-5 rounded-xl text-2xl"
      >
        Ramazan Bey Kasa
      </button>

      <button
        onClick={playSongul}
        className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-5 rounded-xl text-2xl"
      >
        Songül Hanım Kasa
      </button>

      <button
        onClick={playTunahan}
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-10 py-5 rounded-xl text-2xl"
      >
        Tunahan Bey Kasa
      </button>

      <button
        onClick={playYeter}
        className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl text-2xl"
      >
        Yeter Hanım Kasa
      </button>

      <button
        onClick={playGulsum}
        className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-5 rounded-xl text-2xl"
      >
        Gülsüm Hanım Kasa
      </button>

      <button
        onClick={playKapanis}
        className="bg-gray-500 hover:bg-gray-600 text-white px-10 py-5 rounded-xl text-2xl"
      >
        Kapanış 10 Dakika
      </button>

      <button
        onClick={playCuma}
        className="bg-white text-black px-10 py-5 rounded-xl text-2xl"
      >
        Cuma Namazı Anonsu
      </button>

    </main>
  );
}