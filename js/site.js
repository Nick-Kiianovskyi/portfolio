/* site.js — progressive enhancement for the mobile menu and native dialogs. */

(() => {
  "use strict";

  const navToggle = document.querySelector(".nav-toggle");
  const headerMenu = document.getElementById("header-menu");

  if (navToggle && headerMenu) {
    const setMenuOpen = (open) => {
      navToggle.setAttribute("aria-expanded", String(open));
      headerMenu.classList.toggle("is-open", open);
    };

    navToggle.addEventListener("click", () => {
      setMenuOpen(navToggle.getAttribute("aria-expanded") !== "true");
    });

    headerMenu.addEventListener("click", (event) => {
      const link =
        event.target instanceof Element ? event.target.closest("a") : null;
      if (link) setMenuOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        navToggle.getAttribute("aria-expanded") === "true"
      ) {
        setMenuOpen(false);
        navToggle.focus();
      }
    });

    const desktopQuery = window.matchMedia("(min-width: 72rem)");
    desktopQuery.addEventListener("change", (event) => {
      if (event.matches) setMenuOpen(false);
    });
  }

  document.querySelectorAll("[data-dialog-open]").forEach((trigger) => {
    const dialog = document.getElementById(trigger.dataset.dialogOpen);
    if (!(dialog instanceof HTMLDialogElement)) return;

    trigger.addEventListener("click", () => {
      if (dialog.open) return;

      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
      }
    });

    // Native <dialog> handles Esc and the focus trap. Close on a backdrop
    // click, but keep clicks on the dialog's own padding from closing it.
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;

      const rect = dialog.getBoundingClientRect();
      const insideDialog =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!insideDialog) dialog.close();
    });
  });
})();
