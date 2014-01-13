function Controller() {
    function __alloyId21(e) {
        if (e && e.fromAdapter) return;
        __alloyId21.opts || {};
        var models = __alloyId20.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId17 = models[i];
            __alloyId17.__transform = {};
            var __alloyId19 = Alloy.createController("row", {
                $model: __alloyId17,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId19.getViewEx({
                recurse: true
            }));
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
    this.__controllerPath = "tab_1";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("myModel");
    $.__views.window = Ti.UI.createWindow({
        id: "window",
        title: "global/<Require>"
    });
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.window.add($.__views.table);
    var __alloyId20 = Alloy.Collections["myModel"] || myModel;
    __alloyId20.on("fetch destroy change add remove reset", __alloyId21);
    removeItem ? $.__views.table.addEventListener("click", removeItem) : __defers["$.__views.table!click!removeItem"] = true;
    $.__views.tab_1 = Ti.UI.createTab({
        window: $.__views.window,
        title: "global/<Require>",
        id: "tab_1"
    });
    $.__views.tab_1 && $.addTopLevelView($.__views.tab_1);
    exports.destroy = function() {
        __alloyId20.off("fetch destroy change add remove reset", __alloyId21);
    };
    _.extend($, $.__views);
    var myModels = Alloy.Collections.myModel;
    var common = require("common");
    common.prepNavBar($.window, addItem);
    myModels.comparator = common.comparator;
    myModels.fetch();
    __defers["$.__views.table!click!removeItem"] && $.__views.table.addEventListener("click", removeItem);
    __defers["$.__views.__alloyId22!click!addItem"] && $.__views.__alloyId22.addEventListener("click", addItem);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;