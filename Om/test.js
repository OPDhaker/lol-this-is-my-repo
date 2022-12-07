function toggleBtn() {
  const Btns = document.querySelector(".btns");
  const add = document.getElementById("add");
  const remove = document.getElementById("remove");
  const btn = document.querySelector(".btns").querySelectorAll("a");
  Btns.classList.toggle("open");
  if (Btns.classList.contains("open")) {
    remove.style.display = "block";
    add.style.display = "none";
    btn.forEach((e, i) => {
      setTimeout(() => {
        bottom = 40 * i;
        e.style.bottom = bottom + "px";
        console.log(e);
      }, 100 * i);
    });
  } else {
    add.style.display = "block";
    remove.style.display = "none";
    btn.forEach((e, i) => {
      e.style.bottom = "0px";
    });
  }
}