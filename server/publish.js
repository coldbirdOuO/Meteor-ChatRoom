Meteor.publish('Room', function(){
	return Room.find();
})

Meteor.publish('Message', function(){
	return Message.find();
})