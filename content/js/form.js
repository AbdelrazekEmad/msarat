const scriptURL =
  "https://script.google.com/macros/s/AKfycbwwiJPaMtc57IxctXTNbp5pWjZsUmv9DpTRd36dEnTNyMATo6Gdh5TkO1jmltFsMUCo/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thanks for Contacting us..! We Will Contact You Soon...")
    )
    .catch((error) => console.error("Error!", error.message));
});
