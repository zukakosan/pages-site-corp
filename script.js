const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const dateInput = document.querySelector('input[name="date"]');
if (dateInput) {
  const now = new Date();
  const localDate = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("-");
  dateInput.min = localDate;
}

const player = document.getElementById("video-player");
const preview = player?.querySelector(".video__preview");
const videoNote = document.getElementById("video-note");

if (player && preview && videoNote) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "video__load";
  button.setAttribute("aria-label", "Play a KokiJPN video here (loads YouTube)");
  button.innerHTML = '<span class="video__play" aria-hidden="true">▶</span><span class="video__caption">Watch a KokiJPN video <span aria-hidden="true">↗</span></span>';
  const image = preview.querySelector("img");
  if (image) player.prepend(image);
  preview.replaceWith(button);
  videoNote.textContent = "Play to load the YouTube player. You can also watch directly on @KokiJPN.";

  button.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube-nocookie.com/embed/ddrVf9PUIfs?rel=0&autoplay=1";
    iframe.title = "KokiJPN video player";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;
    player.replaceChildren(iframe);
    iframe.focus();
    videoNote.textContent = "Video not playing? Use the @KokiJPN channel link to watch directly on YouTube.";
  }, { once: true });
}
