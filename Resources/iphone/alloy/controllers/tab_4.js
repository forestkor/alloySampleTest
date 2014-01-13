function Controller() {
    function __alloyId51(e) {
        if (e && e.fromAdapter) return;
        __alloyId51.opts || {};
        var models = __alloyId50.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId43 = models[i];
            __alloyId43.__transform = {};
            var __alloyId45 = Ti.UI.createTableViewRow({
                backgroundColor: "#fff",
                height: "50dp"
            });
            rows.push(__alloyId45);
            var __alloyId47 = Ti.UI.createLabel({
                color: "#222",
                font: {
                    fontSize: "32dp",
                    fontWeight: "bold"
                },
                height: Ti.UI.SIZE,
                left: "10dp",
                right: "60dp",
                text: "undefined" != typeof __alloyId43.__transform["title"] ? __alloyId43.__transform["title"] : __alloyId43.get("title")
            });
            __alloyId45.add(__alloyId47);
            var __alloyId49 = Ti.UI.createImageView({
                height: "33dp",
                width: "33dp",
                right: "10dp",
                image: "undefined" != typeof __alloyId43.__transform["image"] ? __alloyId43.__transform["image"] : __alloyId43.get("image")
            });
            __alloyId45.add(__alloyId49);
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
    this.__controllerPath = "tab_4";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.myModelId = Alloy.createCollection("myModel");
    $.__views.window = Ti.UI.createWindow({
        id: "window",
        title: "local/inline"
    });
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.window.add($.__views.table);
    var __alloyId50 = Alloy.Collections["$.myModelId"] || $.myModelId;
    __alloyId50.on("fetch destroy change add remove reset", __alloyId51);
    removeItem ? $.__views.table.addEventListener("click", removeItem) : __defers["$.__views.table!click!removeItem"] = true;
    $.__views.tab_4 = Ti.UI.createTab({
        window: $.__views.window,
        title: "local/inline",
        id: "tab_4"
    });
    $.__views.tab_4 && $.addTopLevelView($.__views.tab_4);
    exports.destroy = function() {
        __alloyId50.off("fetch destroy change add remove reset", __alloyId51);
    };
    _.extend($, $.__views);
    var myModels = $.myModelId;
    var common = require("common");
    common.prepNavBar($.window, addItem);
    myModels.comparator = common.comparator;
    myModels.fetch();
    __defers["$.__views.table!click!removeItem"] && $.__views.table.addEventListener("click", removeItem);
    __defers["$.__views.__alloyId52!click!addItem"] && $.__views.__alloyId52.addEventListener("click", addItem);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;