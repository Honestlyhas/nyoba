const message = `i don’t even know if you’ll read this at the right moment, but if you do… aku cuma mau kamu tahu, i believe in you lebih dari yang kamu kira. you’ve been trying, kamu sudah berusaha even when things feel heavy, kamu masi disini, still moving forward. sometimes it feels uncertain, kadang semuanya terasa gajelas… but bukan berarti kamu ada di jalan yang salah. i just hope, suatu hari nanti kamu bakal ngeliat momen ini and realize how strong you actually were. so, take it slow raisya, tetap lanjut. i know kamu pasti bisa, even when things feel hard right now. and\nthan semangatt raisya sang tarunii gapai mimpi kamu, jangan kalah\nsama pikiran kamu sendiri yaa…\ni trust you and you can do it.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
