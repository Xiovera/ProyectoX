
function Chat()
{
	this.nombre = '';
	this.people = [];
	this.messages = [];
	this.chatAvatar = '';
}

function Person(_name, _avatar)
{
	this.name = _name;
	this.avatar = _avatar;
}

function Message(_message, _sender)
{
	this.message = _message;
	this.sender = _sender;
	this.received = false;
}

function Whatsapp()
{
	this.chats = [];
	this.selectedChat = null;
	this.searchChat		= function(_keyword){};
	this.getChatFromId	= function(_chatId){};
	this.drawChatList	= function(_htmlTarget){
		var ulChatList = document.getElementById('chat-list');

		for (var i in this.chats) {
			console.log(this.chats[i].messages);
			var htmlChatList = '<li><div class="avatar">' +
					'<img src="' + this.chats[i].chatAvatar + '" alt="" class="wh-44">' +
					'<h4 class="w-contact-name">' + this.chats[i].nombre +'</h4>' +
					'<p class="w-last-message">' + this.chats[i].messages[this.chats[i].messages.length-1].message + '</p>' +
				'</div>' +
				'<div class="time">03/01/2016</div>' +
			'</li>';
			ulChatList.innerHTML += htmlChatList;
		}
	};

	this.drawMessageList= function(){
		var divChat = document.getElementById('chat');
		divChat.innerHTML = '';

		for (var i in this.selectedChat.messages) {
			if (object.hasOwnProperty(i)) {
				console.log(this.selectedChat.messages[i]);
				this.sendMessage(this.selectedChat.messages[i], false);
			}
		}
	};
	this.getLastMessage = function(){
		return this.selectedChat.messages[this.selectedChat.messages.length-1];
	};
	this.sendMessage	= function(_message, _in){
		var htmlMessageIn = '<div class="w-message w-message-in"><div class="w-message-text"><p>' + _message.message + '</p><div class="time">14:27</div></div></div>';
		var htmlMessageOut = '<div class="w-message w-message-out"><div class="w-message-text"><p>' + _message.message + '</p><div class="time">14:27</div></div></div>';
		var divChat = document.getElementById('chat');

		this.selectedChat.messages.push(_message);

		if(_in)
		{
			divChat.innerHTML += htmlMessageIn;
		}else{
			divChat.innerHTML += htmlMessageOut;
		}

		divChat.scrollTop = divChat.scrollHeight;
	};
}
/*
window.addEventListener("load", cargaPag);

var mensaje = document.getElementById("mensajes");
var contenedor = document.getElementById("conversacion");
var ultMensaje = document.getElementById("mensaje");
var ultHora = document.getElementById("hora");
var chat = document.getElementsByClassName("avatar");
var imgContacto = document.getElementById("imgContacto");
var nombreContacto = document.getElementById("nombreContacto");

function cargaPag(){
	mensaje.addEventListener("keyup", subirMensaje);
	for (var i = 1; i <= chat.length-2; i++) {
		chat[i].addEventListener("click", cambiaHeader);
	}
}
function subirMensaje(e){
	var tecla = e.keyCode;
	if(tecla == 13 && mensaje.value.trim().length > 0){
		apareceMensaje();
		mensaje.value = "";
	}
}
function apareceMensaje(){
	var envoltura = document.createElement("div");
	var cajaTexto = document.createElement("div");
	var	texto = document.createElement("p");
	var contenHora = document.createElement("div");

	envoltura.classList.add("w-message", "w-message-out");
	cajaTexto.classList.add("w-message-text");
	contenHora.classList.add("time");

	texto.textContent = mensaje.value;
	ultMensaje.textContent = mensaje.value;
	var fecha = new Date();
	var hora = fecha.getHours();
	var minutos = fecha.getMinutes();
	var tiempo = hora + ":" + minutos;
	contenHora.textContent = tiempo;
	ultHora.textContent = tiempo;

	cajaTexto.insertBefore(texto,cajaTexto.childNodes[0]);
	cajaTexto.insertBefore(contenHora,cajaTexto.childNodes[1]);
	envoltura.insertBefore(cajaTexto,envoltura.childNodes[0]);
	contenedor.appendChild(envoltura);
}
function cambiaHeader(){
	imgContacto.src = this.childNodes[1].src ;
	nombreContacto.textContent = this.childNodes[3].textContent;
}

*/