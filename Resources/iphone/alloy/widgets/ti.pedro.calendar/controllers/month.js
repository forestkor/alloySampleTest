function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "ti.pedro.calendar/" + s : s.substring(0, index) + "/ti.pedro.calendar/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function onDayClick(e) {
        if (!e.source.text) return;
        currentDay && (currentDay.backgroundColor = DAY_COLOR);
        currentDay = e.source;
        currentDay.backgroundColor = DAY_COLOR_SELECTED;
    }
    var Widget = new (require("alloy/widget"))("ti.pedro.calendar");
    this.__widgetId = "ti.pedro.calendar";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "month";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var __itemTemplate = arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.month = Ti.UI.createView({
        height: "240dp",
        layout: "vertical",
        bottom: 0,
        width: Ti.Platform.displayCaps.platformWidth,
        id: "month"
    });
    $.__views.month && $.addTopLevelView($.__views.month);
    $.__views.week1 = Ti.UI.createView({
        left: -1,
        right: -1,
        height: "40dp",
        layout: "horizontal",
        id: "week1"
    });
    $.__views.month.add($.__views.week1);
    $.__views.day1 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day1"
    });
    $.__views.week1.add($.__views.day1);
    onDayClick ? $.__views.day1.addEventListener("click", onDayClick) : __defers["$.__views.day1!click!onDayClick"] = true;
    $.__views.day2 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day2"
    });
    $.__views.week1.add($.__views.day2);
    onDayClick ? $.__views.day2.addEventListener("click", onDayClick) : __defers["$.__views.day2!click!onDayClick"] = true;
    $.__views.day3 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day3"
    });
    $.__views.week1.add($.__views.day3);
    onDayClick ? $.__views.day3.addEventListener("click", onDayClick) : __defers["$.__views.day3!click!onDayClick"] = true;
    $.__views.day4 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day4"
    });
    $.__views.week1.add($.__views.day4);
    onDayClick ? $.__views.day4.addEventListener("click", onDayClick) : __defers["$.__views.day4!click!onDayClick"] = true;
    $.__views.day5 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day5"
    });
    $.__views.week1.add($.__views.day5);
    onDayClick ? $.__views.day5.addEventListener("click", onDayClick) : __defers["$.__views.day5!click!onDayClick"] = true;
    $.__views.day6 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day6"
    });
    $.__views.week1.add($.__views.day6);
    onDayClick ? $.__views.day6.addEventListener("click", onDayClick) : __defers["$.__views.day6!click!onDayClick"] = true;
    $.__views.day7 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day7"
    });
    $.__views.week1.add($.__views.day7);
    onDayClick ? $.__views.day7.addEventListener("click", onDayClick) : __defers["$.__views.day7!click!onDayClick"] = true;
    $.__views.week2 = Ti.UI.createView({
        left: -1,
        right: -1,
        height: "40dp",
        layout: "horizontal",
        id: "week2"
    });
    $.__views.month.add($.__views.week2);
    $.__views.day8 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day8"
    });
    $.__views.week2.add($.__views.day8);
    onDayClick ? $.__views.day8.addEventListener("click", onDayClick) : __defers["$.__views.day8!click!onDayClick"] = true;
    $.__views.day9 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day9"
    });
    $.__views.week2.add($.__views.day9);
    onDayClick ? $.__views.day9.addEventListener("click", onDayClick) : __defers["$.__views.day9!click!onDayClick"] = true;
    $.__views.day10 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day10"
    });
    $.__views.week2.add($.__views.day10);
    onDayClick ? $.__views.day10.addEventListener("click", onDayClick) : __defers["$.__views.day10!click!onDayClick"] = true;
    $.__views.day11 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day11"
    });
    $.__views.week2.add($.__views.day11);
    onDayClick ? $.__views.day11.addEventListener("click", onDayClick) : __defers["$.__views.day11!click!onDayClick"] = true;
    $.__views.day12 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day12"
    });
    $.__views.week2.add($.__views.day12);
    onDayClick ? $.__views.day12.addEventListener("click", onDayClick) : __defers["$.__views.day12!click!onDayClick"] = true;
    $.__views.day13 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day13"
    });
    $.__views.week2.add($.__views.day13);
    onDayClick ? $.__views.day13.addEventListener("click", onDayClick) : __defers["$.__views.day13!click!onDayClick"] = true;
    $.__views.day14 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day14"
    });
    $.__views.week2.add($.__views.day14);
    onDayClick ? $.__views.day14.addEventListener("click", onDayClick) : __defers["$.__views.day14!click!onDayClick"] = true;
    $.__views.week3 = Ti.UI.createView({
        left: -1,
        right: -1,
        height: "40dp",
        layout: "horizontal",
        id: "week3"
    });
    $.__views.month.add($.__views.week3);
    $.__views.day15 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day15"
    });
    $.__views.week3.add($.__views.day15);
    onDayClick ? $.__views.day15.addEventListener("click", onDayClick) : __defers["$.__views.day15!click!onDayClick"] = true;
    $.__views.day16 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day16"
    });
    $.__views.week3.add($.__views.day16);
    onDayClick ? $.__views.day16.addEventListener("click", onDayClick) : __defers["$.__views.day16!click!onDayClick"] = true;
    $.__views.day17 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day17"
    });
    $.__views.week3.add($.__views.day17);
    onDayClick ? $.__views.day17.addEventListener("click", onDayClick) : __defers["$.__views.day17!click!onDayClick"] = true;
    $.__views.day18 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day18"
    });
    $.__views.week3.add($.__views.day18);
    onDayClick ? $.__views.day18.addEventListener("click", onDayClick) : __defers["$.__views.day18!click!onDayClick"] = true;
    $.__views.day19 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day19"
    });
    $.__views.week3.add($.__views.day19);
    onDayClick ? $.__views.day19.addEventListener("click", onDayClick) : __defers["$.__views.day19!click!onDayClick"] = true;
    $.__views.day20 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day20"
    });
    $.__views.week3.add($.__views.day20);
    onDayClick ? $.__views.day20.addEventListener("click", onDayClick) : __defers["$.__views.day20!click!onDayClick"] = true;
    $.__views.day21 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day21"
    });
    $.__views.week3.add($.__views.day21);
    onDayClick ? $.__views.day21.addEventListener("click", onDayClick) : __defers["$.__views.day21!click!onDayClick"] = true;
    $.__views.week4 = Ti.UI.createView({
        left: -1,
        right: -1,
        height: "40dp",
        layout: "horizontal",
        id: "week4"
    });
    $.__views.month.add($.__views.week4);
    $.__views.day22 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day22"
    });
    $.__views.week4.add($.__views.day22);
    onDayClick ? $.__views.day22.addEventListener("click", onDayClick) : __defers["$.__views.day22!click!onDayClick"] = true;
    $.__views.day23 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day23"
    });
    $.__views.week4.add($.__views.day23);
    onDayClick ? $.__views.day23.addEventListener("click", onDayClick) : __defers["$.__views.day23!click!onDayClick"] = true;
    $.__views.day24 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day24"
    });
    $.__views.week4.add($.__views.day24);
    onDayClick ? $.__views.day24.addEventListener("click", onDayClick) : __defers["$.__views.day24!click!onDayClick"] = true;
    $.__views.day25 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day25"
    });
    $.__views.week4.add($.__views.day25);
    onDayClick ? $.__views.day25.addEventListener("click", onDayClick) : __defers["$.__views.day25!click!onDayClick"] = true;
    $.__views.day26 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day26"
    });
    $.__views.week4.add($.__views.day26);
    onDayClick ? $.__views.day26.addEventListener("click", onDayClick) : __defers["$.__views.day26!click!onDayClick"] = true;
    $.__views.day27 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day27"
    });
    $.__views.week4.add($.__views.day27);
    onDayClick ? $.__views.day27.addEventListener("click", onDayClick) : __defers["$.__views.day27!click!onDayClick"] = true;
    $.__views.day28 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day28"
    });
    $.__views.week4.add($.__views.day28);
    onDayClick ? $.__views.day28.addEventListener("click", onDayClick) : __defers["$.__views.day28!click!onDayClick"] = true;
    $.__views.week5 = Ti.UI.createView({
        left: -1,
        right: -1,
        height: "40dp",
        layout: "horizontal",
        id: "week5"
    });
    $.__views.month.add($.__views.week5);
    $.__views.day29 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day29"
    });
    $.__views.week5.add($.__views.day29);
    onDayClick ? $.__views.day29.addEventListener("click", onDayClick) : __defers["$.__views.day29!click!onDayClick"] = true;
    $.__views.day30 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day30"
    });
    $.__views.week5.add($.__views.day30);
    onDayClick ? $.__views.day30.addEventListener("click", onDayClick) : __defers["$.__views.day30!click!onDayClick"] = true;
    $.__views.day31 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day31"
    });
    $.__views.week5.add($.__views.day31);
    onDayClick ? $.__views.day31.addEventListener("click", onDayClick) : __defers["$.__views.day31!click!onDayClick"] = true;
    $.__views.day32 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day32"
    });
    $.__views.week5.add($.__views.day32);
    onDayClick ? $.__views.day32.addEventListener("click", onDayClick) : __defers["$.__views.day32!click!onDayClick"] = true;
    $.__views.day33 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day33"
    });
    $.__views.week5.add($.__views.day33);
    onDayClick ? $.__views.day33.addEventListener("click", onDayClick) : __defers["$.__views.day33!click!onDayClick"] = true;
    $.__views.day34 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day34"
    });
    $.__views.week5.add($.__views.day34);
    onDayClick ? $.__views.day34.addEventListener("click", onDayClick) : __defers["$.__views.day34!click!onDayClick"] = true;
    $.__views.day35 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day35"
    });
    $.__views.week5.add($.__views.day35);
    onDayClick ? $.__views.day35.addEventListener("click", onDayClick) : __defers["$.__views.day35!click!onDayClick"] = true;
    $.__views.week6 = Ti.UI.createView({
        left: -1,
        right: -1,
        height: "40dp",
        layout: "horizontal",
        id: "week6"
    });
    $.__views.month.add($.__views.week6);
    $.__views.day36 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day36"
    });
    $.__views.week6.add($.__views.day36);
    onDayClick ? $.__views.day36.addEventListener("click", onDayClick) : __defers["$.__views.day36!click!onDayClick"] = true;
    $.__views.day37 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day37"
    });
    $.__views.week6.add($.__views.day37);
    onDayClick ? $.__views.day37.addEventListener("click", onDayClick) : __defers["$.__views.day37!click!onDayClick"] = true;
    $.__views.day38 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day38"
    });
    $.__views.week6.add($.__views.day38);
    onDayClick ? $.__views.day38.addEventListener("click", onDayClick) : __defers["$.__views.day38!click!onDayClick"] = true;
    $.__views.day39 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day39"
    });
    $.__views.week6.add($.__views.day39);
    onDayClick ? $.__views.day39.addEventListener("click", onDayClick) : __defers["$.__views.day39!click!onDayClick"] = true;
    $.__views.day40 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day40"
    });
    $.__views.week6.add($.__views.day40);
    onDayClick ? $.__views.day40.addEventListener("click", onDayClick) : __defers["$.__views.day40!click!onDayClick"] = true;
    $.__views.day41 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day41"
    });
    $.__views.week6.add($.__views.day41);
    onDayClick ? $.__views.day41.addEventListener("click", onDayClick) : __defers["$.__views.day41!click!onDayClick"] = true;
    $.__views.day42 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        borderColor: "#222222",
        borderWidth: 1,
        left: 0,
        height: Ti.UI.FILL,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#222222",
        textAlign: "center",
        id: "day42"
    });
    $.__views.week6.add($.__views.day42);
    onDayClick ? $.__views.day42.addEventListener("click", onDayClick) : __defers["$.__views.day42!click!onDayClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Date.isIncluded || Ti.include("/ti.pedro.calendar/date.js");
    var args = arguments[0];
    var DAY_COLOR = "#EEE";
    var DAY_COLOR_SELECTED = "#CCC";
    var today = new Date();
    var year = args.year || today.getFullYear();
    var month = args.month ? args.month + 1 : today.getMonth();
    var firstDay = new Date(year, month, 1);
    var days = [];
    for (var i = 1; 43 > i; i++) {
        var d = eval("$.day" + i);
        d.applyProperties({
            width: (Ti.Platform.displayCaps.platformWidth + 2) / 7,
            backgroundColor: DAY_COLOR
        });
        days.push(d);
    }
    var d = 1;
    var i = firstDay.getDay();
    var len = Date.getDaysInMonth(year, month) + i;
    for (i; len > i; i++) {
        days[i].text = d;
        d++;
    }
    var currentDay = null;
    __defers["$.__views.day1!click!onDayClick"] && $.__views.day1.addEventListener("click", onDayClick);
    __defers["$.__views.day2!click!onDayClick"] && $.__views.day2.addEventListener("click", onDayClick);
    __defers["$.__views.day3!click!onDayClick"] && $.__views.day3.addEventListener("click", onDayClick);
    __defers["$.__views.day4!click!onDayClick"] && $.__views.day4.addEventListener("click", onDayClick);
    __defers["$.__views.day5!click!onDayClick"] && $.__views.day5.addEventListener("click", onDayClick);
    __defers["$.__views.day6!click!onDayClick"] && $.__views.day6.addEventListener("click", onDayClick);
    __defers["$.__views.day7!click!onDayClick"] && $.__views.day7.addEventListener("click", onDayClick);
    __defers["$.__views.day8!click!onDayClick"] && $.__views.day8.addEventListener("click", onDayClick);
    __defers["$.__views.day9!click!onDayClick"] && $.__views.day9.addEventListener("click", onDayClick);
    __defers["$.__views.day10!click!onDayClick"] && $.__views.day10.addEventListener("click", onDayClick);
    __defers["$.__views.day11!click!onDayClick"] && $.__views.day11.addEventListener("click", onDayClick);
    __defers["$.__views.day12!click!onDayClick"] && $.__views.day12.addEventListener("click", onDayClick);
    __defers["$.__views.day13!click!onDayClick"] && $.__views.day13.addEventListener("click", onDayClick);
    __defers["$.__views.day14!click!onDayClick"] && $.__views.day14.addEventListener("click", onDayClick);
    __defers["$.__views.day15!click!onDayClick"] && $.__views.day15.addEventListener("click", onDayClick);
    __defers["$.__views.day16!click!onDayClick"] && $.__views.day16.addEventListener("click", onDayClick);
    __defers["$.__views.day17!click!onDayClick"] && $.__views.day17.addEventListener("click", onDayClick);
    __defers["$.__views.day18!click!onDayClick"] && $.__views.day18.addEventListener("click", onDayClick);
    __defers["$.__views.day19!click!onDayClick"] && $.__views.day19.addEventListener("click", onDayClick);
    __defers["$.__views.day20!click!onDayClick"] && $.__views.day20.addEventListener("click", onDayClick);
    __defers["$.__views.day21!click!onDayClick"] && $.__views.day21.addEventListener("click", onDayClick);
    __defers["$.__views.day22!click!onDayClick"] && $.__views.day22.addEventListener("click", onDayClick);
    __defers["$.__views.day23!click!onDayClick"] && $.__views.day23.addEventListener("click", onDayClick);
    __defers["$.__views.day24!click!onDayClick"] && $.__views.day24.addEventListener("click", onDayClick);
    __defers["$.__views.day25!click!onDayClick"] && $.__views.day25.addEventListener("click", onDayClick);
    __defers["$.__views.day26!click!onDayClick"] && $.__views.day26.addEventListener("click", onDayClick);
    __defers["$.__views.day27!click!onDayClick"] && $.__views.day27.addEventListener("click", onDayClick);
    __defers["$.__views.day28!click!onDayClick"] && $.__views.day28.addEventListener("click", onDayClick);
    __defers["$.__views.day29!click!onDayClick"] && $.__views.day29.addEventListener("click", onDayClick);
    __defers["$.__views.day30!click!onDayClick"] && $.__views.day30.addEventListener("click", onDayClick);
    __defers["$.__views.day31!click!onDayClick"] && $.__views.day31.addEventListener("click", onDayClick);
    __defers["$.__views.day32!click!onDayClick"] && $.__views.day32.addEventListener("click", onDayClick);
    __defers["$.__views.day33!click!onDayClick"] && $.__views.day33.addEventListener("click", onDayClick);
    __defers["$.__views.day34!click!onDayClick"] && $.__views.day34.addEventListener("click", onDayClick);
    __defers["$.__views.day35!click!onDayClick"] && $.__views.day35.addEventListener("click", onDayClick);
    __defers["$.__views.day36!click!onDayClick"] && $.__views.day36.addEventListener("click", onDayClick);
    __defers["$.__views.day37!click!onDayClick"] && $.__views.day37.addEventListener("click", onDayClick);
    __defers["$.__views.day38!click!onDayClick"] && $.__views.day38.addEventListener("click", onDayClick);
    __defers["$.__views.day39!click!onDayClick"] && $.__views.day39.addEventListener("click", onDayClick);
    __defers["$.__views.day40!click!onDayClick"] && $.__views.day40.addEventListener("click", onDayClick);
    __defers["$.__views.day41!click!onDayClick"] && $.__views.day41.addEventListener("click", onDayClick);
    __defers["$.__views.day42!click!onDayClick"] && $.__views.day42.addEventListener("click", onDayClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;