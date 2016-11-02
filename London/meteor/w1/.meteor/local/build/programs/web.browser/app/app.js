var require = meteorInstall({"template.image_share.js":function(){

////////////////////////////////////////////////////////////////////////////
//                                                                        //
// template.image_share.js                                                //
//                                                                        //
////////////////////////////////////////////////////////////////////////////
                                                                          //
                                                                          // 1
Template.body.addContent((function() {                                    // 2
  var view = this;                                                        // 3
  return [ HTML.Raw("<h1>Welcome to Meteor!</h1>\n\t"), HTML.DIV({        // 4
    class: "container"                                                    // 5
  }, "\n\t", Spacebars.include(view.lookupTemplate("images")), "\n\t") ];
}));                                                                      // 7
Meteor.startup(Template.body.renderToDocument);                           // 8
                                                                          // 9
Template.__checkName("images");                                           // 10
Template["images"] = new Template("Template.images", (function() {        // 11
  var view = this;                                                        // 12
  return [ HTML.DIV({                                                     // 13
    class: "row"                                                          // 14
  }, "\n\t\t", Blaze.Each(function() {                                    // 15
    return Spacebars.call(view.lookup("images"));                         // 16
  }, function() {                                                         // 17
    return [ "\n\t\t", HTML.DIV({                                         // 18
      class: "col-xs-12 col-md-3"                                         // 19
    }, "\n\t\t\t", HTML.DIV({                                             // 20
      class: "thumbnail"                                                  // 21
    }, "\n\t\t\t", HTML.IMG({                                             // 22
      class: "js-image",                                                  // 23
      src: function() {                                                   // 24
        return Spacebars.mustache(view.lookup("img_src"));                // 25
      },                                                                  // 26
      alt: function() {                                                   // 27
        return Spacebars.mustache(view.lookup("img_alt"));                // 28
      }                                                                   // 29
    }), "\n\t\t\t\t", HTML.DIV({                                          // 30
      class: "caption"                                                    // 31
    }, "\n\t\t\t\t\t", HTML.H3("Thumbnail label"), "\n\t\t\t\t\t", HTML.P("Description of the image"), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), HTML.Comment("  end col"), "\n\t\t" ];
  }), "\n\t"), HTML.Raw("<!--  end row-->") ];                            // 33
}));                                                                      // 34
                                                                          // 35
////////////////////////////////////////////////////////////////////////////

},"image_share.js":function(){

////////////////////////////////////////////////////////////////////////////
//                                                                        //
// image_share.js                                                         //
//                                                                        //
////////////////////////////////////////////////////////////////////////////
                                                                          //
if (Meteor.isClient) {                                                    // 1
	var img_data = [{                                                        // 2
		img_src: "laptops.jpg",                                                 // 4
		img_alt: "some laptops"                                                 // 5
	}, {                                                                     // 3
		img_src: "beard.jpg",                                                   // 8
		img_alt: "some musicians"                                               // 9
	}, {                                                                     // 7
		img_src: "bass.jpg",                                                    // 12
		img_alt: "bass player"                                                  // 13
	}];                                                                      // 11
	Template.images.helpers({ images: img_data });                           // 16
	Template.images.events({                                                 // 17
		'click.js-image': function () {                                         // 18
			function clickJsImage(event) {                                         // 18
				console.log(event);                                                   // 19
				$(event.target).css("width", "50px");                                 // 20
			}                                                                      // 21
                                                                          //
			return clickJsImage;                                                   // 18
		}()                                                                     // 18
	});                                                                      // 17
}                                                                         // 23
                                                                          //
if (Meteor.isServer) {                                                    // 25
	console.log("i am a server");                                            // 26
}                                                                         // 27
////////////////////////////////////////////////////////////////////////////

}},{"extensions":[".js",".json",".html",".css"]});
require("./template.image_share.js");
require("./image_share.js");