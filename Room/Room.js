
if(Meteor.isClient) {

  Template.Rooms.helpers({
  	rooms: function () {
  		return Room.find({},{sort:{date:-1}});
  	},
  	picked: function () {
  		var SessionID = Session.get('clickedSession');
  		if(SessionID == this._id)
  			return 'picked'
  	}
  });

Template.RoomDetail.events({
        'change [type=checkbox]' : function () {
          Session.set("SessionComplete",this._id)
            if(this.iscomplete==false){
            Room.update(this._id, {$set:{iscomplete:true}})
          }else {
            Room.update(this._id, {$set:{iscomplete:false}})
          }
      },
        'click a' : function() {
          Session.set("RoomIDforOnlinePeople", this._id);
          var countOnline = Room.findOne(this._id).onlinePeople || 0;
          countOnline++;
          Room.update(this._id, {$set:{onlinePeople:countOnline}})
        }
})

Template.RoomDetail.helpers({
  checked: function () {
    var SessionComplete = Session.get("SessionComplete");

    if(this._id==SessionComplete){
      if(Room.findOne(SessionComplete).iscomplete==true)
      return "checked";
    }
    else
      return ""

  }});

  Template.Rooms.events ({
  	'click' : function () {
  		Session.set('clickedSession', this._id);
  	},

  })

  Template.addRoom.events({
  	'keydown input' : function(e){
  		e.preventDefault;
  		if(event.which==13){
  		  var name = $('#addRoomName').val();
               Meteor.call('createRoom', name);
  		  $('#addRoomName').val('');
  		}
  	},
      'click button' : function(e) {
            e.preventDefault;
             var name = $('#addRoomName').val();
               Meteor.call('createRoom', name);
               $('#addRoomName').val('');
      }
  });

  Template.delRoom.events ({
  	'click' : function() {
  		var SessionID = Session.get('clickedSession');
             Meteor.call('deleteRoom', SessionID)

  	}
  })
}