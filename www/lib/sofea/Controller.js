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
define(["sofea/util"], function(util) {
    Controller = function() {};
    util.singleton(Controller);

    Controller.prototype.activate = function(pathParams) {
        return typeof this.rendered === "undefined" ? this.rendered = true && this.render() : this.focus();
    };

    Controller.prototype.render = function() {
        this.focus();
    };

    Controller.prototype.focus = function() {
    };

    return Controller;
});
