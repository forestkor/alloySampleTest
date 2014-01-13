function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        backgroundColor: "#fff",
        height: "50dp",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        color: "#222",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        left: "10dp",
        right: "60dp",
        text: "undefined" != typeof $model.__transform["title"] ? $model.__transform["title"] : $model.get("title"),
        id: "__alloyId11"
    });
    $.__views.row.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createImageView({
        height: "33dp",
        width: "33dp",
        right: "10dp",
        image: "undefined" != typeof $model.__transform["image"] ? $model.__transform["image"] : $model.get("image"),
        id: "__alloyId12"
    });
    $.__views.row.add($.__views.__alloyId12);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;