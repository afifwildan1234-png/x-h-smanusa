const quotes = [
  "Belajar bersama lebih indah daripada sendiri.",
  "Tawa di kelas ini akan selalu terkenang.",
  "Kebersamaan adalah hadiah terbaik.",
  "Setiap tugas ada ceritanya, setiap cerita ada kenangannya."
];

function showQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[random];
}

document.addEventListener("DOMContentLoaded", () => {
  const text = "Selamat Datang di Kelas X-H\nAngkatan 2025/2026";
  const container = document.getElementById("welcome-text");
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      container.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 80); // kecepatan ketik (ms)
    } else {
      // setelah selesai ketik, tunggu 1.5 detik lalu fade out
      setTimeout(() => {
        document.getElementById("welcome").classList.add("fade-out");
      }, 1500);
    }
  }

  typeWriter();
});
