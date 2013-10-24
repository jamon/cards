// This file was automatically generated from layout.soy.
// Please don't edit this file by hand.

define(["lib/soyutils.js"], function(lib_soyutils_js) {
var cards_view_MainLayout = {};


cards_view_MainLayout.Main = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="menu"><ul><li><a href="#/about">About</a></li><li><a href="#/schedule">Schedule</a></li><li><a href="#/members">Members</a></li><li><a class="signin" href="javascript:void(0)">Sign In</a></li></ul></div><div class="_content"></div>');
  if (!opt_sb) return output.toString();
};


cards_view_MainLayout.NewContentArea = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="_contentArea"></div>');
  if (!opt_sb) return output.toString();
};

return cards_view_MainLayout;
});
