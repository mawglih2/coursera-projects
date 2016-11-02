if (Meteor.isClient){
	var img_data = [
	{
		img_src: "laptops.jpg",
		img_alt: "some laptops"
	},
	{
		img_src: "beard.jpg",
		img_alt: "some musicians"
	},
	{
		img_src: "bass.jpg",
		img_alt: "bass player"
	}
];
Template.images.helpers({images:img_data});
Template.images.events({
	'click .js-image': function (event) {
		console.log(event);
		$(event.target).css("width", "50px");
	}
});
}

if (Meteor.isServer){
	console.log("i am a server");
}