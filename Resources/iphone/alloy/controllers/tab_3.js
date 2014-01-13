function Controller() {
    function __alloyId41(e) {
        if (e && e.fromAdapter) return;
        __alloyId41.opts || {};
        var models = __alloyId40.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId37 = models[i];
            __alloyId37.__transform = {};
            var __alloyId39 = Alloy.createController("row", {
                $model: __alloyId37,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId39.getViewEx({
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
    this.__controllerPath = "tab_3";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.myModelId = Alloy.createCollection("myModel");
    $.__views.window = Ti.UI.createWindow({
        id: "window",
        title: "local/<Require>"
    });
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.window.add($.__views.table);
    var __alloyId40 = Alloy.Collections["$.myModelId"] || $.myModelId;
    __alloyId40.on("fetch destroy change add remove reset", __alloyId41);
    removeItem ? $.__views.table.addEventListener("click", removeItem) : __defers["$.__views.table!click!removeItem"] = true;
    $.__views.tab_3 = Ti.UI.createTab({
        window: $.__views.window,
        title: "local/<Require>",
        id: "tab_3"
    });
    $.__views.tab_3 && $.addTopLevelView($.__views.tab_3);
    exports.destroy = function() {
        __alloyId40.off("fetch destroy change add remove reset", __alloyId41);
    };
    _.extend($, $.__views);
    var myModels = $.myModelId;
    var common = require("common");
    common.prepNavBar($.window, addItem);
    myModels.comparator = common.comparator;
    myModels.fetch();
    __defers["$.__views.table!click!removeItem"] && $.__views.table.addEventListener("click", removeItem);
    __defers["$.__views.__alloyId42!click!addItem"] && $.__views.__alloyId42.addEventListener("click", addItem);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;