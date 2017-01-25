function Chat()
{
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

function Persona (_name,_avatar);
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
	this.
}