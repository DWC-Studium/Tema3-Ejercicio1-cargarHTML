jQuery(function() {
    $("#botonJQuery").on("click", function() {
        $.get("./tabla.html", function(datos, status) {
            $("#contenedor").html(datos)
        })
    })
});