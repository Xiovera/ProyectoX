// parte logica



// parte visual
function onMensajeKey(evt) //puede ser evt o event del evento
{
	if (evt.keyCode == 13)
	{
		//console.log("lo hicee!" + evt);
		var elementoInputMensajes = document.getElementById("mensajes");
		crearMensaje(elementoInputMensajes.value);
		elementoInputMensajes.value = "";//para q se quede vacio
	}
}
function crearMensaje(_mensaje)
{
	var htmlMensajeIn = '<div class="w-message w-message-in">' +
		'<div class="w-message-text">' +
			'<h5 class="green-1">Maria Paula Rivarola</h5>' +
			'<p>Jajaja Sii finalmente se corto!!</p>' +
			'<div class="time">11:13</div>' +
		'</div>' +
	'</div>';

	var d = new Date();
	var htmlMensajeOut = '<div class="w-message w-message-out">' +
		'<div class="w-message-text">' +
			'<p>' + _mensaje + '</p>' +
			'<div class="time">'+d.getHours()+':'+d.getMinutes()+'</div>' +
		'</div>' +
	'</div>';

	var elementoConversacion = document.getElementById("conversacion");
	elementoConversacion.innerHTML += htmlMensajeOut
}


function crearListaChats()
{


}

function crearChat()
{
	var elementoListaChats = document.getElementById("lista-chats");
	var 
	<li>
		<div class="avatar">
			<img src="image/logocodeacademy.png" alt="" class="wh-44">
			<h4 class="w-contact-name">Laboratoria Perú</h4>
			<p class="w-last-message" id="mensaje">No se pique!!</p>
		</div>
	<div class="time" id="hora">14:27</div>
	</li>
}


function actualizarCabeceraChat()
{

}