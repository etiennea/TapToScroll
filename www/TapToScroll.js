//
//  TapToScroll.js
//
// Updated by Etienne Adriaenssen on 2013-09-07
//
// All rights reserved.
// MIT Licensed

var exec = require('cordova/exec');

var TapToScroll = function() {
}

TapToScroll.prototype.initListener = function() {
	cordova.exec("TapToScroll.initListener");
};

module.exports = new TapToScroll();
