function Chat()
{
	this.nombre ='';
	this.people = [];
	this.messages = [];
	this.chatAvatar = '';
}

function Message(_message,_sender);
{
	this.message = _message;
	this.sender = _sender;
	this.received = false;
}

function Person(_name,_avatar);
{
	this.name = _name;
	this.avatar = _avatar;
}

function Whatsapp()
{
	this.chats = [];
	this.selectedChat = null;
	this.searchChat = function(_keyword){};
	this.getChatFromId = function(_chatId){};
	this.drawChatList = function(_htmlTarget){
		var ulChatList = document.getElementById('chat-list');

		for (var i in this.chats){
			console.log(this.chats[i].messages);
			var htmlChatList = '<li><div class="avatar">'+
								'<img src="'+this.chats[i].chatAvatar + '"alt=""class="wh-44">'+
								'<h4 class="w-contact-name">' + this.chats[i].nombre + '</h4>' +
								'<p class="w-last-message">' + this.chats [i].messages[this.chats[i].messages.length-1].message + '<'	}
	}
}	

function cambiaHeader()
{
	imgContacto.src =this.childNotes[1].src;
	nombreContacto.textContent = this.childNotes[3].textContent;
}

var search = document.getElementById("search"),
	contacto = document.getElementByTagName("h4"),
	forEach = Array.prototype.forEach;

search.addEventListener("keyup",function(e){
	var choice=this.value;

	forEach.call(contacto,function(f){
		if(f.innerHTML.toLowerCase().search(choice.toLowerCase()==-1)
			f.parentNode.parentNode.style.display="none";
		else
			f.parentNode.parentNode.style.display="block"})
	}
})

