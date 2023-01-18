const imageChange = document.querySelector(".imageChange");

function change() {
  if (!imageChange.src.match("/assets/handle-dark.svg")) {
    imageChange.src = "/assets/handle-dark.svg";
    document.body.classList.add("light");
  } else {
    imageChange.src = "/assets/handle-light.svg";
    document.body.classList.remove("light");
  }
}
