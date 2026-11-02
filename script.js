const worldMessage = document.querySelector("#worldMessage");
document.querySelectorAll(".world-card").forEach((card) => {
  card.addEventListener("click", () => {
    worldMessage.textContent = card.dataset.world + " selected. Next, we'll make this world playable.";
  });
});

const avatar = document.querySelector("#avatar");
const avatarMessage = document.querySelector("#avatarMessage");
document.querySelectorAll(".swatch").forEach((swatch) => {
  swatch.addEventListener("click", () => {
    avatar.style.setProperty("--avatar-color", swatch.dataset.color);
    document.querySelectorAll(".swatch").forEach((item) => item.classList.remove("selected"));
    swatch.classList.add("selected");
    avatarMessage.textContent = "Avatar color changed!";
  });
});

const buildArea = document.querySelector("#buildArea");
const blockCount = document.querySelector("#blockCount");
let blocks = 0;

document.querySelector("#addBlock").addEventListener("click", () => {
  const block = document.createElement("div");
  block.className = "block";
  block.style.left = (18 + (blocks % 8) * 54) + "px";
  block.style.bottom = (35 + Math.floor(blocks / 8) * 48) + "%";
  buildArea.appendChild(block);
  blocks += 1;
  blockCount.textContent = blocks + (blocks === 1 ? " block" : " blocks");
});

document.querySelector("#clearBlocks").addEventListener("click", () => {
  buildArea.querySelectorAll(".block").forEach((block) => block.remove());
  blocks = 0;
  blockCount.textContent = "0 blocks";
});

document.querySelector("#loginButton").addEventListener("click", () => {
  alert("Account sign-in is not connected yet. We'll add accounts after the first prototype.");
});