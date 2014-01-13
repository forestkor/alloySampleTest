function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "ti.pedro.calendar/" + s : s.substring(0, index) + "/ti.pedro.calendar/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function createMonth(args) {
        var month = Alloy.createWidget("ti.pedro.calendar", "month", args);
        return month.getView();
    }
    function moveToNext() {
        if (currentMonth > 11) {
            currentMonth = 1;
            currentYear++;
        }
        mainView.animate({
            left: -2 * width,
            duration: 300
        }, function() {
            mainView.left = -width;
            next.left = width;
            mainView.remove(curr);
            curr = next;
            next = createMonth({
                month: currentMonth++,
                year: currentYear
            });
        });
    }
    function moveToPrev() {
        if (1 > currentMonth) {
            currentMonth = 11;
            currentYear--;
        }
        mainView.animate({
            left: 0,
            duration: 300
        }, function() {
            mainView.left = -width;
            prev.left = width;
            mainView.remove(curr);
            curr = prev;
            prev = createMonth({
                month: currentMonth--,
                year: currentYear
            });
        });
    }
    function onClickNext() {
        next.left = 2 * width;
        mainView.add(next);
        moveToNext();
    }
    function onClickPrev() {
        prev.left = 0;
        mainView.add(prev);
        moveToPrev();
    }
    new (require("alloy/widget"))("ti.pedro.calendar");
    this.__widgetId = "ti.pedro.calendar";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.widget = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "widget"
    });
    $.__views.widget && $.addTopLevelView($.__views.widget);
    $.__views.__alloyId0 = Ti.UI.createView({
        bottom: "240dp",
        height: "44dp",
        backgroundColor: "#ccc",
        width: Ti.UI.FILL,
        id: "__alloyId0"
    });
    $.__views.widget.add($.__views.__alloyId0);
    $.__views.date_label = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        textAlign: "center",
        id: "date_label"
    });
    $.__views.__alloyId0.add($.__views.date_label);
    $.__views.next = Ti.UI.createButton({
        width: "40dp",
        height: "40dp",
        right: "5dp",
        title: ">",
        id: "next"
    });
    $.__views.__alloyId0.add($.__views.next);
    onClickNext ? $.__views.next.addEventListener("click", onClickNext) : __defers["$.__views.next!click!onClickNext"] = true;
    $.__views.prev = Ti.UI.createButton({
        width: "40dp",
        height: "40dp",
        left: "5dp",
        title: "<",
        id: "prev"
    });
    $.__views.__alloyId0.add($.__views.prev);
    onClickPrev ? $.__views.prev.addEventListener("click", onClickPrev) : __defers["$.__views.prev!click!onClickPrev"] = true;
    $.__views.month_container = Ti.UI.createView({
        backgroundColor: "red",
        bottom: 0,
        height: Ti.UI.SIZE,
        id: "month_container"
    });
    $.__views.widget.add($.__views.month_container);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var mainView = $.month_container;
    var width = Ti.Platform.displayCaps.platformWidth;
    mainView.applyProperties({
        width: 3 * width,
        left: -width
    });
    var currentMonth = 1;
    var currentYear = 2012;
    currentMonth--;
    var prev = createMonth({
        month: currentMonth++,
        year: currentYear
    });
    var curr = createMonth({
        month: currentMonth++,
        year: currentYear
    });
    var next = createMonth({
        month: currentMonth++,
        year: currentYear
    });
    curr.left = width;
    mainView.add(curr);
    __defers["$.__views.next!click!onClickNext"] && $.__views.next.addEventListener("click", onClickNext);
    __defers["$.__views.prev!click!onClickPrev"] && $.__views.prev.addEventListener("click", onClickPrev);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;