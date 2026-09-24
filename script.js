document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".addImageButton");
  const container = document.querySelector(".imageContainer");
  const emptyState = document.querySelector(".emptyState");
  const count = document.querySelector(".imageCount");
  const scrollTop = document.querySelector(".scrollTop");
  document.querySelector(".currentYear").textContent = new Date().getFullYear();

  button.addEventListener("click", () => {
    const imageNumber = container.children.length + 1;
    const card = document.createElement("figure");
    card.className = "imageCard";
    const image = document.createElement("img");
    image.src = `https://picsum.photos/600/600?random=${Math.floor(Math.random() * 2000)}`;
    image.alt = `Random gallery image ${imageNumber}`;
    image.loading = "lazy";
    const label = document.createElement("figcaption");
    label.className = "imageNumber";
    label.textContent = `Image ${String(imageNumber).padStart(2, "0")}`;
    card.append(image, label);
    container.appendChild(card);
    count.textContent = imageNumber;
    container.classList.add("hasImages");
  });

  window.addEventListener("scroll", () => scrollTop.classList.toggle("visible", window.scrollY > 320), { passive: true });
  scrollTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
});
