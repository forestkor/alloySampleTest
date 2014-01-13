function Controller() {
    function __alloyId33(e) {
        if (e && e.fromAdapter) return;
        __alloyId33.opts || {};
        var models = __alloyId32.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId25 = models[i];
            __alloyId25.__transform = {};
            var __alloyId27 = Ti.UI.createTableViewRow({
                backgroundColor: "#fff",
                height: "50dp"
            });
            rows.push(__alloyId27);
            var __alloyId29 = Ti.UI.createLabel({
                color: "#222",
                font: {
                    fontSize: "32dp",
                    fontWeight: "bold"
                },
                height: Ti.UI.SIZE,
                left: "10dp",
                right: "60dp",
                text: "undefined" != typeof __alloyId25.__transform["title"] ? __alloyId25.__transform["title"] : __alloyId25.get("title")
            });
            __alloyId27.add(__alloyId29);
            var __alloyId31 = Ti.UI.createImageView({
                height: "33dp",
                width: "33dp",
                right: "10dp",
                image: "undefined" != typeof __alloyId25.__transform["image"] ? __alloyId25.__transform["image"] : __alloyId25.get("image")
            });
            __alloyId27.add(__alloyId31);
        }
        $.__views.table.setData(rows);
    }
    function addItem() {
        common.addItem(myModels);
    }
    function removeItem(e) {
        common.removeItem(myModels, e.index);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tab_2";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("myModel");
    $.__views.window = Ti.UI.createWindow({
        id: "window",
        title: "global/inline"
    });
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.window.add($.__views.table);
    var __alloyId32 = Alloy.Collections["myModel"] || myModel;
    __alloyId32.on("fetch destroy change add remove reset", __alloyId33);
    removeItem ? $.__views.table.addEventListener("click", removeItem) : __defers["$.__views.table!click!removeItem"] = true;
    $.__views.tab_2 = Ti.UI.createTab({
        window: $.__views.window,
        title: "global/inline",
        id: "tab_2"
    });
    $.__views.tab_2 && $.addTopLevelView($.__views.tab_2);
    exports.destroy = function() {
        __alloyId32.off("fetch destroy change add remove reset", __alloyId33);
    };
    _.extend($, $.__views);
    var myModels = Alloy.Collections.myModel;
    var common = require("common");
    common.prepNavBar($.window, addItem);
    myModels.fetch();
    __defers["$.__views.table!click!removeItem"] && $.__views.table.addEventListener("click", removeItem);
    __defers["$.__views.__alloyId34!click!addItem"] && $.__views.__alloyId34.addEventListener("click", addItem);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;