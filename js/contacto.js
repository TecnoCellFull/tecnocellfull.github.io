function sendEmail()
{
    $(".loader").show();

	var nombreCompleto = document.getElementById('visitor_name').value;
	var telefono = document.getElementById('telefono').value;
	var emailDesde = document.getElementById('visitor_email').value;
    var cuerpoMensaje = document.getElementById('visitor_message').value;

    var bodymsj = "<h1 style='color: #5e9ca0;'>Recibiste un mensaje desde tu sitio web</h1>";
				 bodymsj +=	"<h2 style='color: #2e6c80;'>&iquest;De quien se trata?:</h2>";
				 bodymsj +=	"<p><strong>Nombre</strong>: " + nombreCompleto + "</p>";
				 bodymsj +=	"<p><strong>Telefono</strong>: " + telefono + "</p>";
				 bodymsj +=	"<h2 style='color: #2e6c80;'>Mensaje</h2>";
				 bodymsj +=	"<p><span style='color: #ff9900;'>" + cuerpoMensaje + "</span></p>";
				 bodymsj +=	"<p>&nbsp;</p>";
				 bodymsj +=	"<p>&nbsp;</p>";
				 bodymsj +=	"<p>&nbsp;</p>";

	//alert(cuerpoMensaje);

	Email.send({
        Host: "smtp.gmail.com",
        Username : "omonzonoi@gmail.com",
        Password : "Qbanmed3",
        To : 'omonzonoi@gmail.com,
        From : emailDesde,
        Subject : "Información Solicitada desde sitio TecnoCellFull.com (No te hagas el salame)",
        Body : bodymsj,
        }).then(
            () => {
                document.getElementById('visitor_name').value = '';
                document.getElementById('telefono').value = '';
                document.getElementById('visitor_email').value = '';
                document.getElementById('visitor_message').value = '';

                swal("Gracias!", "Mensaje Enviado!", "success");   

                $(".loader").fadeOut("slow");
            }
        );

}


$(window).load(function() {
    $(".loader").fadeOut("slow");
});
