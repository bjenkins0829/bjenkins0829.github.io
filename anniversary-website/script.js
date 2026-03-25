// Fade in page on load
window.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1.5s ease";
  requestAnimationFrame(() => (document.body.style.opacity = 1));

  // Populate dropdown with bars
  const dropdown = document.getElementById("bar-select");
  for (const key in barInfo) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = barInfo[key].name;
    dropdown.appendChild(option);
  }
});

// Bar information
const barInfo = {
  lashukran: {
    name: "La Shukran",
    desc: "A cozy spot for cocktails and conversation, featuring Mediterranean-inspired drinks and a relaxed vibe.",
    url: "https://www.lashukran.com",
    img: "https://images.squarespace-cdn.com/content/v1/66d1dfbb6dfbf70b17b0fba7/5593d523-84da-4705-8ac3-02d7489f1915/LaShuk_Logo_Insta-Icon-2.png"
  },
  desertfivespot: {
    name: "Desert Five Spot",
    desc: "Trendy rooftop bar with desert-themed cocktails and stunning D.C. skyline views.",
    url: "https://www.desertfivespot.com/dc",
    img: "https://cdn.prod.website-files.com/662653a5e6b16bd5c36933d3/68c4a1b919ed940ed5f0c4e2_250903_Desert%205%20Spot%20DC_7195.jpeg"
  },
  lucymercerbar: {
    name: "Lucy Mercer Bar",
    desc: "An elegant, dimly lit bar with vintage charm and expertly crafted cocktails.",
    url: "https://www.lucymercerbar.com",
    img: "https://www.lucymercerbar.com/lucy-mercer-bar-welcome.jpg"
  },
  coquitobar: {
    name: "Coquito Bar",
    desc: "A Latin-inspired cocktail bar bringing tropical flavors, music, and good energy to your night.",
    url: "https://www.coquitobar.com",
    img: "https://static.wixstatic.com/media/ebea23_3978139412f144338ebd0157794321c4~mv2.jpg/v1/crop/x_0,y_682,w_4592,h_2469/fill/w_1548,h_832,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Coquitos.jpg"
  },
  barbetsiedc: {
    name: "Bar Betsie",
    desc: "Modern yet intimate, known for its creative mixology and comfortable lounge setting.",
    url: "https://www.barbetsiedc.com",
    img: "https://images.squarespace-cdn.com/content/v1/677d30114b3e8c30ecd1d27a/d52e4332-775c-4962-b4ff-1417befa9b4f/BarBetsie3_WEB.jpg?format=1500w"
  },
  cottonandreed: {
    name: "Cotton & Reed",
    desc: "Distillery bar offering rum-focused cocktails in a lively, rustic-chic atmosphere.",
    url: "https://www.cottonandreed.com/home",
    img: "https://images.squarespace-cdn.com/content/v1/57c99217d482e9450af4b3ad/1678827522600-ADW5VR83V6B97DE9C979/DTP_7017.jpg"
  },
  treehouseunionmarket: {
    name: "Treehouse at Union Market",
    desc: "Playful rooftop bar with lush greenery, fun drinks, and great city views.",
    url: "https://www.treehouseunionmarket.com",
    img: "https://images.squarespace-cdn.com/content/v1/67360b85bc162f5cb14e8128/adeae5d4-4c22-4dbf-86f0-ab8a678c3a18/IMG_5095.jpeg?format=2500w"
  }
};

// Modal logic
const dropdown = document.getElementById("bar-select");
const modal = document.getElementById("bar-modal");
const closeModal = modal.querySelector(".close");
const modalTitle = document.getElementById("bar-name");
const modalDesc = document.getElementById("bar-description");
const modalLink = document.getElementById("bar-link");
const modalImage = document.getElementById("bar-image");

dropdown.addEventListener("change", e => {
  const key = e.target.value;
  if (key && barInfo[key]) {
    const { name, desc, url, img } = barInfo[key];
    modalTitle.textContent = name;
    modalDesc.textContent = desc;
    modalLink.href = url;
    modal.classList.add("hidden");
    modalImage.src = img;
    modalImage.onload = () => {
      modal.classList.remove("hidden");
    };
  }
});


// Close modal events
closeModal.addEventListener("click", () => modal.classList.add("hidden"));
window.addEventListener("click", e => {
  if (e.target === modal) modal.classList.add("hidden");
});
