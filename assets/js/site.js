(function () {
  "use strict";

  const buttons = Array.from(document.querySelectorAll("[role='tab']"));
  const panels = Array.from(document.querySelectorAll("[role='tabpanel']"));
  const validTabs = new Set(buttons.map((button) => button.dataset.tab));

  function activateTab(tabId, options = {}) {
    const requestedTab = validTabs.has(tabId) ? tabId : "inicio";

    buttons.forEach((button) => {
      const isActive = button.dataset.tab === requestedTab;
      button.setAttribute("aria-selected", String(isActive));
      button.tabIndex = isActive ? 0 : -1;
    });

    panels.forEach((panel) => {
      panel.hidden = panel.id !== requestedTab;
    });

    if (options.updateHash !== false) {
      const nextHash = `#${requestedTab}`;
      if (window.location.hash !== nextHash) {
        window.history.pushState(null, "", nextHash);
      }
    }

    if (options.focus) {
      document.querySelector(`[data-tab='${requestedTab}']`)?.focus();
    }
  }

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      activateTab(button.dataset.tab);
    });

    button.addEventListener("keydown", (event) => {
      let nextIndex = index;

      if (event.key === "ArrowRight") {
        nextIndex = (index + 1) % buttons.length;
      } else if (event.key === "ArrowLeft") {
        nextIndex = (index - 1 + buttons.length) % buttons.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = buttons.length - 1;
      } else {
        return;
      }

      event.preventDefault();
      activateTab(buttons[nextIndex].dataset.tab, { focus: true });
    });
  });

  window.addEventListener("popstate", () => {
    activateTab(window.location.hash.slice(1), { updateHash: false });
  });

  window.addEventListener("hashchange", () => {
    activateTab(window.location.hash.slice(1), { updateHash: false });
  });

  activateTab(window.location.hash.slice(1), { updateHash: false });
})();
