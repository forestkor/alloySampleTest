function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var win = Ti.UI.createWindow({
        backgroundColor: "white",
        fullscreen: true
    });
    var listView = Ti.UI.createListView();
    var section = Ti.UI.createListSection();
    var sectionData = [];
    var i = 25;
    for (var k = 0; 25 > k; k++) sectionData.push({
        properties: {
            title: "Row " + (k + 1)
        }
    });
    section.setItems(sectionData);
    listView.sections = [ section ];
    win.add(listView);
    win.open();
    listView.setMarker({
        sectionIndex: 0,
        itemIndex: i - 1
    });
    listView.addEventListener("marker", function() {
        var max = i + 25;
        var data = [];
        for (var k = i; max > k; k++) data.push({
            properties: {
                title: "Row " + (k + 1)
            }
        });
        section.appendItems(data);
        i += 25;
        listView.setMarker({
            sectionIndex: 0,
            itemIndex: i - 1
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;