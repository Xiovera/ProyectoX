//-------------------------- parte logica-------------------------
function Chat (_nombre, _imagen)
{
	this.nombre = _nombre;
	this.imagenURL = _imagen;
	this.ultimoMensaje = "";
	this.horaUltimoMensaje = '';

	this.borrarMensajes = function()
	{
		//alert("borrado");
	};
}

var dataListaChats = [
	new Chat("chat 1", 'image/logocodeacademy.png'),
	new Chat("chat 2", 'image/logocodeacademy.png'),
	new Chat("chat 3", 'image/logocodeacademy.png'),
];


//----------------- parte visual-----------------------------------------
var liListItem = null;

function init()
{
	//alert("Ya cargo!")
	initChatList();
}

function initChatList()
{
	var elListaChats = document.getElementById("lista-chats");

	for (var i in dataListaChats)
	{
		var htmlChatItem = '<li draggable="true" ondragend="" ondragover="" ondragexit="" ondragstart="inicioDrag(event)"><div class="avatar">' +
			'<img src="' + dataListaChats[i].imagenURL + '" alt="" class="wh-44">' +
			'<h4 class="w-contact-name">'+ dataListaChats[i].nombre + '</h4>' +
			'<p class="w-last-message" id="mensaje">'+ dataListaChats[i].ultimoMensaje + '</p>' +
			'</div>' + 
			'<div class="time" id="hora">'+ dataListaChats[i].horaUltimoMensaje + '</div><li>';
	dataListaChats[i].borrarMensajes();
	elListaChats.innerHTML += htmlChatItem;
	}

	setEventsChatList();

}

function inicioDrag(evt){
	console.log(evt);

}
function setEventsChatList(){
	var listaChats = document.getElementById('lista-chats');
	var arrayListItems = listaChats.getElementsByTagName('li');

	for (var i = 0; i < arrayListItems.length; i++)
	{
		/*arrayListitems[i].onclick = function(){
			alert("clic");
		};*/
		arrayListItems[i].addEventListener('click' , onChatItemClick); 
	}
}

function onChatItemClick(evt)
{
	//console.log(evt.currentTarget);
	var contactName = evt.currentTarget.getElementsByClassName('w-contact-name')[0].textContent;
	var imgURL = evt.currentTarget.getElementsByClassName('wh-44')[0].src;
	console.log('click');
	actualizarCabeceraChat(contactName,imgURL, "Conectado");
}

function onMensajeKey(evt) //puede ser evt o event del evento
{
	if (evt.keyCode == 13)
	{
		//console.log("lo hicee!" + evt);
		var elInputMensajes = document.getElementById("mensajes");
		
		crearChat(elInputMensajes.value);
		//crearMensaje(elInputMensajes.value);

		elInputMensajes.value = ""; //para q se quede vacio
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
			'<div class="time">' + d.getHours(); + ':' + d.getMinutes(); +'</div>' +
		'</div>' +
	    '</div>';

	var mensaje = liListItem.getElementsByClassName("w-last-message")[0];
	mensaje.innerHTML = _mensaje;
	//console.log();

	

	var elChat = document.getElementById("chat");
	elChat.innerHTML += htmlMensajeOut;
	elChat.scrollTop = elChat.scrollHeight;//para poner el scroll en position top 

	socket.emit('send'+ _mensaje);
}

function crearChat(_mensaje)
{
	var elListaChats = document.getElementById("lista-chats");
	
	if (liListItem == null)
	{
		liListItem = document.createElement("LI");
		var htmlChatItem = '<div class="avatar">' +
			'<img src="image/logocodeacademy.png" alt="" class="wh-44">' +
			'<h4 class="w-contact-name">Laboratoria Perú</h4>' +
			'<p class="w-last-message" id="mensaje">'+ _mensaje +'</p>' +
			'</div>' + 
			'<div class="time" id="hora">14:27</div>';

		liListItem.innerHTML = htmlChatItem;

		elListaChats.insertBefore(liListItem,elListaChats.childNodes[0]);	
	}
	setEventsChatList();
	//elementoListaChats.innerHTML += htmlChatItem;
}


function actualizarCabeceraChat()
{
	var chatHeader = document.getElementById("chat-header");
	chatHeader.getElementByClassName('w-contact-name')[0].innerHTML = _contactName;
	chatHeader.getElementByClassName('w-users-messages')[0].innerHTML = _estado;
	chatHeader.getElementByTagName('img')[0].src = _imageURL;
}