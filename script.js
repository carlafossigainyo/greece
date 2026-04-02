// Affiche les détails de la ville
function showInfo(city) {
  const section = document.getElementById("info-section");
  const title = document.getElementById("city-title");
  const text = document.getElementById("city-text");
  const img = document.getElementById("city-img");
  const bookingSelect = document.getElementById("booking-select");

  section.classList.remove("hidden");

  if (city === "mykonos") {
    title.innerText = "Mykonos la Festive";
    text.innerText = "Découvrez l'île la plus célèbre des Cyclades. Entre ses moulins à vent emblématiques, ses plages de sable fin et sa vie nocturne légendaire, Mykonos promet une expérience inoubliable.";
    img.src = "mykonos.jpg";
  }

  if (city === "santorini") {
    title.innerText = "Santorin la Romantique";
    text.innerText = "Célèbre pour ses couchers de soleil spectaculaires, ses villages aux maisons blanches perchés sur la falaise et sa caldeira unique au monde. Le joyau de la mer Égée.";
    img.src = "santorin.jpg";
  }

  // On pré-sélectionne la ville dans le formulaire
  bookingSelect.value = city;

  // On descend doucement vers la section info
  section.scrollIntoView({ behavior: 'smooth' });
}

// Fonctions pour le formulaire Pop-up
function openForm() {
  document.getElementById("reservation").classList.remove("hidden");
}

function closeForm() {
  document.getElementById("reservation").classList.add("hidden");
}

function confirmBooking(event) {
  event.preventDefault();
  alert("Demande envoyée ! Nos agents vous contacteront sous 24h. ✈️");
  closeForm();
}
