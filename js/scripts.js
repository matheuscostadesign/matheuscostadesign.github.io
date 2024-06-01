// Mostrar ano atual footer
const ano = document.getElementById("mostrarAnoAtual");
const anoAtual = new Date();
ano.innerHTML = anoAtual.getFullYear();

// // Voltar ao topo suave (jQuery)
$(document).ready(function () {
  $(".voltar-topo").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});

// Scroll suave nos links section Hero
$('.s-hero a[href^="#"]').on("click", function (e) {
  // header
  e.preventDefault();
  var id = $(this).attr("href"),
    targetOffset = $(id).offset().top;
  $("html, body").animate(
    {
      scrollTop: targetOffset - 0, // margin-top (altura do header)
    },
    400 // velocidade transição
  );
});

// Função para adicionar target_blank em links externos
document.addEventListener("DOMContentLoaded", function () {
  const currentDomain = window.location.hostname;

  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    const href = link.getAttribute("href");

    if (href && !href.includes(currentDomain) && href.startsWith("http")) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});
