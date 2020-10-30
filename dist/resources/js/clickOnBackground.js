// const mainSite = document.querySelector(".full-width-click");
// if (mainSite) {
//   mainSite.addEventListener("click", () => {
//     window.location.href = "catalog/model1/lilydress.html";
//   });
// }

function checkPassword() {
  var password = document.getElementById("password").value;
  //console.log("users value is: " + password);
  if (password == "LoveLiz2021") {
    window.location.href = "catalog/model1/lilydress.html";
  } else {
    document.getElementById("error").style.display = "inline-block";
  }
}

function search(ele) {
  if (event.key === "Enter") {
    checkPassword();
  }
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
