const mainSite = document.querySelector(".full-width-click");
if (mainSite) {
  mainSite.addEventListener("click", () => {
    window.location.href = "catalog/model1/lilydress.html";
  });
}

const secondPoster = document.querySelector(".full-width-click-poster-1");
if (secondPoster) {
  secondPoster.addEventListener("click", () => {
    window.location.href = "/dist/catalog/model12/rosedress.html";
  });
}
