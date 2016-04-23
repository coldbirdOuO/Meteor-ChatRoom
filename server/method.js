Meteor.methods ({
	'createRoom' : function(name) {
		var currentUser = Meteor.userId();
		if(!currentUser){
			console.log("87?");
		} else {
			Room.insert({
	  		  	name: name,
			             scomplete: false,
			  	date: new Date(),
			              recentDate: new Date().getHours
			 })
		}
	},
	'deleteRoom' : function(SessionID) {
		Room.remove (SessionID);
	},

	//OwnRoom
	'sendMessage' : function(name,message,currentList){		
		Message.insert({
	                   name:name,
	                   roomID:currentList,
  		      message: message,
		      date: new Date()
  		  })
	}
})