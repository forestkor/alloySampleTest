function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "ti.pedro.calendar/" + s : s.substring(0, index) + "/ti.pedro.calendar/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isClass: true,
    priority: 10000.0003,
    key: "week",
    style: {
        left: -1,
        right: -1,
        height: "40dp",
        layout: "horizontal"
    }
}, {
    isClass: true,
    priority: 10000.0004,
    key: "day",
    style: {
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
        textAlign: "center"
    }
}, {
    isId: true,
    priority: 100000.0002,
    key: "month",
    style: {
        height: "240dp",
        layout: "vertical",
        bottom: 0,
        width: Ti.Platform.displayCaps.platformWidth
    }
} ];