if(Meteor.isClient){

	Template.register.events({
	    'submit form': function(event){
	        event.preventDefault();
	        /*
	      
		*/
	    }
	});


	Template.register.onRendered(function(){
	    $('.register').validate({
	     submitHandler: function(event){
	      var name = $('[name=name]').val();
	        var email = $('[name=email]').val();
	        var password = $('[name=password]').val();
		Accounts.createUser({
		    username: name,
		    email: email,
		    password: password
		}, function(error){
		    if(error){
		        console.log(error.reason); // Output error if registration fails
		    } else {
		        Router.go("home"); // Redirect user if registration succeeds
		    }
		});
	   }
	})
	});

	Template.facebook.events({
		'click a': function (e) {
			e.preventDefault;
			console.log("hi")
			Meteor.loginWithFacebook({requestPermissions: ['email']}, function(error){
			  if (error) {
			    console.log(error);
			  }else {
			        Router.go("home"); // Redirect user if registration succeeds
			    }
			});
		}
	});

	Template.google.events({
		'click a': function (e) {
			e.preventDefault;
			
			Meteor.loginWithGoogle({requestPermissions: ['email']}, function(error){
			  if (error) {
			    console.log(error);
			  }else {
			        Router.go("home"); // Redirect user if registration succeeds
			    }
			});
		}
	});


}