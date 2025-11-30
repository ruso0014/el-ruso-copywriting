//ANIMACION PREGUNTAS Y RESPUESTAS--------------------------------------

const questions = document.querySelectorAll(".faq-question-btn");

questions.forEach(q => {
  q.addEventListener("click", () => {

    const answer = q.nextElementSibling;

    //Si ya está abierto -> cerrarlo
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      answer.classList.remove("open");
      q.classList.remove("active");
    }
    //Si está cerrado -> abrirlo
    else{
      answer.style.maxHeight = answer.scrollHeight + 40 + "px";
      answer.classList.add("open");
      q.classList.add("active");
    }
  });
});


// CLICK> El botón cambia su estilo y abre la URL en nueva pestaña:
document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".cta");
  const target = "agenda.html";

  botones.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    window.open(target, "_blank");

//El botón vuelve a su estado normal después de unos segundos:
    setTimeout(() => btn.classList.remove("clicked"), 6000);
    });
  });
});
