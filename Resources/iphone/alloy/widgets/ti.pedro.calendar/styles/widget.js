function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "ti.pedro.calendar/" + s : s.substring(0, index) + "/ti.pedro.calendar/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0007,
    key: "Button",
    style: {
        width: "40dp",
        height: "40dp"
    }
}, {
    isClass: true,
    priority: 10000.0005,
    key: "main_view",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.FILL
    }
}, {
    isClass: true,
    priority: 10000.0011,
    key: "toolbar",
    style: {
        bottom: "240dp",
        height: "44dp",
        backgroundColor: "#ccc",
        width: Ti.UI.FILL
    }
}, {
    isId: true,
    priority: 100000.0006,
    key: "month_container",
    style: {
        backgroundColor: "red",
        bottom: 0,
        height: Ti.UI.SIZE
    }
}, {
    isId: true,
    priority: 100000.0008,
    key: "date_label",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        textAlign: "center"
    }
}, {
    isId: true,
    priority: 100000.0009,
    key: "next",
    style: {
        right: "5dp",
        title: ">"
    }
}, {
    isId: true,
    priority: 100000.001,
    key: "prev",
    style: {
        left: "5dp",
        title: "<"
    }
} ];