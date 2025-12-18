// Listen for clicks on the page
document.addEventListener("click", (e) => {
  const sendButton = e.target.closest('div[role="button"]');

  if (
    sendButton &&
    sendButton.innerText &&
    sendButton.innerText.toLowerCase().includes("send")
  ) {
    // Delay to ensure Gmail actually sends the email
    setTimeout(() => {
      showEldenOverlay();
    }, 300);
  }
});

function showEldenOverlay() {
  if (document.getElementById("elden-overlay-root")) return;

  const overlay = document.createElement("div");
  overlay.id = "elden-overlay-root";

  overlay.innerHTML = `
    <div class="elden-overlay">
      <div class="elden-text">
        THY MESSAGE RIDES UPON THE WIND.
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const audio = new Audio(
    chrome.runtime.getURL("assets/elden.mp3")
  );
  audio.volume = 0.5;
  audio.play().catch(() => {});

  setTimeout(() => {
    overlay.remove();
  }, 4500);
}
