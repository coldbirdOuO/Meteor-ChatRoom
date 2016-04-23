if(Meteor.isClient) {
       
	Template.messageRoom.events({
  	'keydown input' : function(e){
        var name= Meteor.users.findOne(Meteor.userId()).username||Meteor.users.findOne(Meteor.userId()).profile.name;
  		e.preventDefault;
  		if(event.which==13){
  		  var message= $('#RoomMessage').val();
              Meteor.call('sendMessage', name, message,currentList);
  		  $('#RoomMessage').val('');
  		}
  	   },
       'click button' : function(e) {
         e.preventDefault;
        var name= Meteor.users.findOne(Meteor.userId()).username;
        var message= $('#RoomMessage').val();
        Meteor.call('sendMessage', name, message,currentList);
        $('#RoomMessage').val('');

       }
 	 });

	Template.messageRoom.helpers({
  		'messages': function () {
  			return Message.find({roomID:currentList},{sort:{date:-1}});
  		}
  	});
  	
}