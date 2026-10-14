window.__b2_loaded = true;

fetch("/profile", {
  method: "POST",
  credentials: "same-origin",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    email: "alice.remote.proof@devbank.local"
  }).toString()
})
  .then(response => {
    window.__b2_result = response.ok ? "submitted" : "request failed";
  })
  .catch(() => {
    window.__b2_result = "request failed";
  });
