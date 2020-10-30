const mainSite = document.querySelector(".full-width-click");
if (mainSite) {
  mainSite.addEventListener("click", () => {
    window.location.href = "catalog/model1/lilydress.html";
  });
}

const firstPoster = document.querySelector(".full-width-click-poster-1");
if (firstPoster) {
  firstPoster.addEventListener("click", () => {
    window.location.href = "/catalog/model12/poppydress.html";
  });
}

const secondPoster = document.querySelector(".full-width-click-poster-2");
if (secondPoster) {
  secondPoster.addEventListener("click", () => {
    window.location.href = "/";
  });
}
