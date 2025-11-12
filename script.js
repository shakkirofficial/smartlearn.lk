// js/script.js
document.addEventListener("DOMContentLoaded", () => {
  // 1) dynamic subjects on stream pages
  const subjectContainer = document.getElementById("subjectContainer");
  if (subjectContainer) {
    const streams = {
      "bio-page": [
        {name:"Biology", file:"subjects/biology.html", emoji:"🧪"},
        {name:"Physics", file:"subjects/physics.html", emoji:"⚛️"},
        {name:"Chemistry", file:"subjects/chemistry.html", emoji:"🧫"},
        {name:"Agriculture", file:"subjects/agriculture.html", emoji:"🌾"}
      ],
      "physical-page": [
        {name:"Mathematics", file:"subjects/mathematics.html", emoji:"➗"},
        {name:"Physics", file:"subjects/physics.html", emoji:"⚛️"},
        {name:"Chemistry", file:"subjects/chemistry.html", emoji:"🧫"}
      ],
      "tech-page": [
        {name:"BST", file:"subjects/bst.html", emoji:"📊"},
        {name:"E-Tech", file:"subjects/etech.html", emoji:"⚡"},
        {name:"ICT", file:"subjects/ict.html", emoji:"🖥️"},
        {name:"SFT", file:"subjects/sft.html", emoji:"💾"}
      ]
    };

    const pageClass = document.body.className.trim();
    const list = streams[pageClass] || [];
    list.forEach(s => {
      const a = document.createElement("a");
      a.className = "subject-card";
      a.href = s.file;
      a.innerHTML = `<div class="subject-inner"><h3>${s.emoji} ${s.name}</h3><p class="subject-sub">View materials</p></div>`;
      subjectContainer.appendChild(a);
    });
  }

  // 2) populate materials on subject pages
  const materialsContainer = document.getElementById("materialsContainer");
  if (materialsContainer) {
    const materials = [
      {label:"📘 Government Resource Book"},
      {label:"📝 Unit-wise Notes"},
      {label:"🎥 Unit-wise Videos"},
      {label:"📄 Past Papers & Marking Schemes"},
      {label:"🧩 Unit Quizzes / Tests"}
    ];

    materials.forEach(m => {
      const card = document.createElement("div");
      card.className = "material-card";
      card.innerHTML = `<h4>${m.label}</h4><button class="upload-btn">🔔 Uploading Soon</button>`;
      materialsContainer.appendChild(card);
    });

    // animated "Uploading Soon" — show a small toast/animated message
    materialsContainer.addEventListener("click", (e) => {
      if (e.target && e.target.classList.contains("upload-btn")) {
        showUploadingToast(e.target);
      }
    });

    function showUploadingToast(btn) {
      const toast = document.createElement("div");
      toast.textContent = "📤 Uploading Soon...";
      toast.style.position = "fixed";
      toast.style.right = "20px";
      toast.style.bottom = "20px";
      toast.style.background = "#007BFF";
      toast.style.color = "#fff";
      toast.style.padding = "10px 14px";
      toast.style.borderRadius = "10px";
      toast.style.boxShadow = "0 6px 20px rgba(3,37,76,0.2)";
      toast.style.zIndex = 9999;
      toast.style.opacity = "0";
      toast.style.transform = "translateY(12px)";
      document.body.appendChild(toast);
      // animate in
      requestAnimationFrame(()=> {
        toast.style.transition = "all 320ms ease-out";
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0)";
      });
      // auto-remove
      setTimeout(()=> {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(12px)";
        setTimeout(()=> toast.remove(), 350);
      }, 1800);
    }
  }
});
