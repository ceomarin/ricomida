// Tooltip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Jquery
$(document).ready(function () {
  // Evento click
  $("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente...");
  });

  // Selectores etiqueta evento `dblclick`
  $("body").on("dblclick", "h4", function () {
    $(this).css("color", "red");
  });

  // Selectores de clase método`toggle`
  $(".card-title").click(function () {
    $(".card-text").toggle();
  });
});
