document.addEventListener("DOMContentLoaded", () => {
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const sidebar = $("#sidebar");
  const backdrop = $("#modalBackdrop");
  const toast = $("#toast");
  let toastTimer;

  // Set the date from the visitor's device.
  const dateEl = $("#todayDate");
  if (dateEl) dateEl.textContent = new Intl.DateTimeFormat("en-US", {
    weekday: "long", month: "long", day: "numeric"
  }).format(new Date()).toUpperCase();

  $("#menuToggle")?.addEventListener("click", () => sidebar.classList.toggle("open"));
  $$(".nav-link").forEach(link => link.addEventListener("click", () => {
    $$(".nav-link").forEach(item => item.classList.remove("active"));
    link.classList.add("active");
    $("#currentPage").textContent = link.dataset.page || "Dashboard";
    sidebar.classList.remove("open");
  }));

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
  }
  function openModal(title) {
    $("#modalTitle").textContent = title;
    backdrop.classList.add("open");
    backdrop.setAttribute("aria-hidden", "false");
    $("#itemName").focus();
  }
  function closeModal() {
    backdrop.classList.remove("open");
    backdrop.setAttribute("aria-hidden", "true");
    $("#quickForm").reset();
  }

  const modalTitles = {
    quickAdd: "Create something new",
    lessonModal: "Create lesson plan",
    assessmentModal: "Create assessment",
    subjectModal: "Add a subject"
  };
  $$("[data-modal]").forEach(button => button.addEventListener("click", () => openModal(modalTitles[button.dataset.modal])));
  $("#closeModal").addEventListener("click", closeModal);
  $("#cancelModal").addEventListener("click", closeModal);
  backdrop.addEventListener("click", e => { if (e.target === backdrop) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

  $("#quickForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = $("#itemName").value.trim();
    if (!name) return;
    closeModal();
    showToast(`“${name}” saved in this demo.`);
  });

  $$("[data-toast]").forEach(button => button.addEventListener("click", () => showToast(button.dataset.toast)));
  $$("[data-page-link]").forEach(button => button.addEventListener("click", () => {
    $("#currentPage").textContent = button.dataset.pageLink;
    showToast(`${button.dataset.pageLink} view selected (demo).`);
  }));
  $("#notifications")?.addEventListener("click", () => showToast("You're all caught up on notifications."));
  $("#profileMenu")?.addEventListener("click", () => showToast("Profile settings are ready to connect."));
});
