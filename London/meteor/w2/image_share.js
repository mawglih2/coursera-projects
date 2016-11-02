// this is image_share.js
Images = new Mongo.Collection("images");


if (Meteor.isClient) {
   Template.images.helpers({images:  Images.find()});

   Template.images.events({
    'click .js-image':function(event){
     $(event.target).css("width", "50px");
    }, 
    'click .js-del-image' : function(event){
      var image_id = this._id;
      console.log(image_id);
    }
    });

}
