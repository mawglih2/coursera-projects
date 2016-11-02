var require = meteorInstall({"image_share.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// image_share.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
if (Meteor.isClient) {                                               // 1
	var img_data = [{                                                   // 2
		img_src: "laptops.jpg",                                            // 4
		img_alt: "some laptops"                                            // 5
	}, {                                                                // 3
		img_src: "beard.jpg",                                              // 8
		img_alt: "some musicians"                                          // 9
	}, {                                                                // 7
		img_src: "bass.jpg",                                               // 12
		img_alt: "bass player"                                             // 13
	}];                                                                 // 11
	Template.images.helpers({ images: img_data });                      // 16
	Template.images.events({                                            // 17
		'click.js-image': function () {                                    // 18
			function clickJsImage(event) {                                    // 18
				console.log(event);                                              // 19
				$(event.target).css("width", "50px");                            // 20
			}                                                                 // 21
                                                                     //
			return clickJsImage;                                              // 18
		}()                                                                // 18
	});                                                                 // 17
}                                                                    // 23
                                                                     //
if (Meteor.isServer) {                                               // 25
	console.log("i am a server");                                       // 26
}                                                                    // 27
///////////////////////////////////////////////////////////////////////

}},{"extensions":[".js",".json"]});
require("./image_share.js");
//# sourceMappingURL=app.js.map
