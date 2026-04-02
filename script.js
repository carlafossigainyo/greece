function showInfo(city) {
  const section = document.getElementById("info-section");
  const title = document.getElementById("city-title");
  const text = document.getElementById("city-text");
  const img = document.getElementById("city-img");

  section.classList.remove("hidden");

  if (city === "mykonos") {
    title.innerText = "Mykonos";
    text.innerText = "Mykonos is famous for its parties, beaches and luxury lifestyle.";
    img.src = "images/mykonos.jpg";
  }

  if (city === "santorini") {
    title.innerText = "Santorini";
    text.innerText = "Santorini is known for its sunsets, white houses and romantic views.";
    img.src = "images/santorin.jpg";
  }

  section.scrollIntoView();
}