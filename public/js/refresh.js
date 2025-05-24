// Force refresh on back/forward navigation only on /dineIn and /delivery
window.addEventListener("pageshow", function (event) {
  const path = window.location.pathname;
  if (
    (path === "/dineIn" || path === "/delivery") &&
    (event.persisted || performance.getEntriesByType("navigation")[0].type === "back_forward")
  ) {
    window.location.reload();
  }
});
