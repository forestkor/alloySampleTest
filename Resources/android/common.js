var Alloy = require("alloy");

exports.addItem = function(collection) {
    var random = Math.ceil(12 * Math.random());
    var model = Alloy.createModel("MyModel", {
        title: "title " + random,
        image: "/" + random + ".png",
        timestamp: new Date().getTime()
    });
    collection.add(model);
    model.save();
    collection.fetch();
};

exports.removeItem = function(collection, index) {
    var model = collection.at(index);
    collection.remove(model);
    model.destroy();
    collection.fetch();
};

exports.prepNavBar = function(window, callback) {
    var button = Ti.UI.createButton({
        title: "add item"
    });
    button.addEventListener("click", callback);
    window.rightNavButton = button;
};

exports.comparator = function(model) {
    return model.get("timestamp");
};