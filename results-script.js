const outputResultsList = document.getElementById("resultsOutput");
new URLSearchParams(window.location.search).forEach((value, key) => {
  outputResultsList.append(`${key}: ${value}`);
});

const backButtonElement = document.getElementById("back-button-element");
backButtonElement.addEventListener(
  "click",
  () => {
    location.assign("/Index.html");
  },
  false
);
