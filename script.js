const container = document.querySelector(".container");

const aysuBtn = document.querySelector(".aysu-btn");
const erenBtn = document.querySelector(".eren-btn");

aysuBtn.addEventListener("click", () => {
  container.innerHTML = `
    <h1 class="apology">Aysu da çok seviyor... 💖</h1>
    <p class="message">Ama Eren kadar değil 😢</p>
  `;
  showHearts();
});

erenBtn.addEventListener("click", () => {
  container.innerHTML = `
    <h1 class="apology">Eren, Aysu'yu her şeyden, herkesten çok seviyor... 💘</h1>
    <p class="message">Ve maalesef Aysu biraz üzülecek... çünkü eren daha fazla seviyor </p>
  `;
  showHearts();
});

function showHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("img");
    heart.src = "./assets/heart.png";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}
