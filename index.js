Room = new Mongo.Collection('rooms');
Message = new Mongo.Collection('message');



Router.configure({
	layoutTemplate:'main'
})

Router.route('/', {
    name: 'home',
    template: 'home',

});

Router.route('/authentication', {
    name: 'authentication',
    template: 'authentication',
});


Router.route('/register', {
	name: 'register',
	template: 'register'
})

Router.route('/login', {
  name: 'login',
  template: 'login'
})


Router.route('/room/:_id', {
	template: 'OwnRoom',
    	data: function(){
           	 currentList = this.params._id;
       	 return Room.findOne({ _id: currentList })
    },
    subscriptions: function() {
      return Meteor.subscribe('Message')

    },

    onStop: function(){
      var roomID = Session.get("RoomIDforOnlinePeople");
      var countOnline = Room.findOne(roomID).onlinePeople || 0;
      countOnline--;
      Room.update(roomID, {$set:{onlinePeople:countOnline}})
      return ""
    }
});

if(Meteor.isClient) {
  Meteor.subscribe('Room')
  Template.main.events({
    'click .logout' : function(event) {
        event.preventDefault();
        Meteor.logout();
    }
  })
}