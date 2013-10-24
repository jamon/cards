/*
 * The contents of this file are subject to the Mozilla Public License
 * Version 1.1 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/

 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific language governing rights and limitations
 * under the License.
 * 
 * Contributor(s): 
 *   Jamon Terrell <jamon@sofea.net>
 *   Petar Strinic <petar@sofea.net>
*/
define(["cards/view/layout"], function(tpl) {
    var Layout = function() {};

    Layout.prototype.target = null;
    Layout.getInstance = function() {
        if(typeof Layout.instance === "undefined") {
            Layout.instance = new Layout();
            Layout.instance.render();
        }
        return Layout.instance;
    };

    Layout.prototype.render = function() {
        this.target = $("body");
        this.target.append(tpl.Main());
    };

    Layout.prototype.newContentArea = function() {
        return $(tpl.NewContentArea()).appendTo($("._content", this.target))[0];
    };

    Layout.prototype.selectContentArea = function(contentArea) {
        $("._contentArea._selected", this.target).removeClass("_selected");
        $(contentArea).addClass("_selected");
    };
    return Layout;
});
