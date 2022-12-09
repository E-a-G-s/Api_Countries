const btnDark = document.querySelector(".btn-dark-mode");

//Aca capturo el evento , con toogle muestro una clase cada vez que se presione el boton
btnDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.className === "dark-mode") {
    btnDark.innerHTML = ` <i class="fa-regular fa-sun"></i> Modo Claro`;
  } else {
    btnDark.innerHTML = `<i class="fa-regular fa-moon"></i> Modo Oscuro`;
  }
});
