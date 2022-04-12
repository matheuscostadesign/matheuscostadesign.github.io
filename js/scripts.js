// Mostrar ano atual footer
// const ano = document.getElementById("mostrarAnoAtual");
// const anoAtual = new Date();
// ano.innerHTML = anoAtual.getFullYear();

// // Voltar ao topo suave (jQuery)
// $(document).ready(function () {
//   $(".voltar-topo").click(function () {
//     $("html, body").animate({ scrollTop: 0 }, "slow");
//     return false;
//   });
// });

// Scroll suave nos links section Hero
$('.s-hero a[href^="#"]').on("click", function (e) {
  // header
  e.preventDefault();
  var id = $(this).attr("href"),
    targetOffset = $(id).offset().top;
  $("html, body").animate(
    {
      scrollTop: targetOffset - 80, // margin-top (altura do header)
    },
    400 // velocidade transição
  );
});
