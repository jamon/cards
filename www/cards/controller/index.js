define(["sofea", "cards/view/index", "cards/component/MainLayout"],
        function(sofea, tpl, layout) {
    var Controller = function() {};
    sofea.util.extend(Controller, sofea.Controller);
    sofea.util.singleton(Controller);

    Controller.prototype.layout = null;
    Controller.prototype.target = null;
    Controller.prototype.pathParams = null;

    Controller.prototype.render = function() {
        this.layout = layout.getInstance();
        this.target = this.layout.newContentArea();
        $(this.target).html(tpl.Main());
        console.log(this.target);
        this.focus();
    };

    Controller.prototype.focus = function() {
        this.layout.selectContentArea(this.target);
    };

    return Controller;
});
