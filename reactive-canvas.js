// // module to make a Fabric JS canvas reactive

// // constructor
// //  el		HTMLElement			the canvas DOM element
// //			string				CSS selector for the canvas element
// // 			fabric.Canvas 		an existing fabric canvas controller
// //  opts	object 				(optional) options to pass to fabric.Canvas on initialization
// //								ignored if 'el' is a fabric.Canvas instance
// // 
// // if el is an HTMLElement or string, this will initialize a fabric.Canvas instance
// // which can then be accessed via this.fabric
// // refer to: http://fabricjs.com/docs/fabric.Canvas.html#initialize
// ReactiveCanvas = function(el, opts) {
// 	if ( el instanceof fabric.Canvas ) {
// 		this.fabric = el;
// 	} else {
// 		this.fabric = new fabric.Canvas(el, opts);
// 	}

// 	// // temp - get a reference to the current cubby being displayed (create if it doesn't exist)
// 	// Meteor.subscribe('cubbies', function() { 
// 	// 	console.log('cubbies refreshed'); 

// 	// 	if ( Cubbies.find({}).count() === 0 ) {
// 	// 		Materialize.toast('uh-oh, something went wrong... please refresh');
// 	// 		console.error('no cubby found in collection');
// 	// 		return;
// 	// 	}

// 	// 	_cubby = Cubbies.findOne({});
// 	// 	console.log('cubby: ', _cubby);

// 	// 	// set up binding to the canvas data
// 	// 	_cvBinding = Tracker.autorun(function() {
// 	// 		// mark dependency against the cubby instance + fetch fresh copy
// 	// 		var cb = Cubbies.findOne({ _id: _cubby._id });

// 	// 		// load the data into the canvas
// 	// 		cb && cb.data && _cv.loadFromJSON(cb.data, function() { _cv.renderAll(); });
// 	// 	});
// 	// });


// 	// // set up binding to user's draw events
// 	// _cv.on('path:created', function(options) {
// 	// 	// save the canvas data
// 	// 	_cubby && _cubby.update({ data: _cv.toObject() });
// 	// });
// };

// _(ReactiveCanvas.prototype).extend({




// });