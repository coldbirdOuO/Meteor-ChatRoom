if(Meteor.isServer){
	ServiceConfiguration.configurations.remove({
	    service: 'facebook'
	});
	 
	ServiceConfiguration.configurations.insert({
	    service: 'facebook',
	    appId: '822541607871774',
	    secret: 'b9ff1dadf062f6cb6aa1a5942d3d8ee1'
	});


	ServiceConfiguration.configurations.remove({
	  service: "google"
	});
	ServiceConfiguration.configurations.insert({
	  service: "google",
	  clientId: "194950853543-h3r6om014d8iikj8d581g9vqcht7e9vb.apps.googleusercontent.com",
	  secret: "byu0QZTpY1SQgjzkg-tutBHw"
	});

}