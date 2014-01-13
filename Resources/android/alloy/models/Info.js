exports.definition = {
    config: {
        columns: {
            id: "INTEGER PRIMARY KEY AUTOINCREMENT",
            title: "TEXT",
            subtitle: "TEXT",
            image: "TEXT"
        },
        adapter: {
            type: "sql",
            collection_name: "info",
            idAttribute: "id"
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("info", exports.definition, [ function(migration) {
    migration.name = "info";
    migration.id = "201209301904312";
    migration.up = function(migrator) {
        migrator.createTable({
            columns: {
                id: "INTEGER PRIMARY KEY AUTOINCREMENT",
                title: "TEXT",
                subtitle: "TEXT",
                image: "TEXT"
            }
        });
    };
    migration.down = function(migrator) {
        migrator.dropTable("info");
    };
}, function(migration) {
    migration.name = "info";
    migration.id = "201301161234567";
    var info = [];
    for (var i = 0; 500 > i; i++) 0 === i % 7 ? info.push({
        title: "This is the title",
        subtitle: "This is the slightly more verbose subtitle",
        image: i % 2 ? "/appc.png" : "/alloy.png"
    }) : i % 2 ? info.push({
        title: "This is the title with subtitle",
        subtitle: "This is the slightly more verbose subtitle"
    }) : info.push({
        title: "This is the lonely title"
    });
    migration.up = function(migrator) {
        for (var i = 0; info.length > i; i++) migrator.insertRow(info[i]);
    };
    migration.down = function(migrator) {
        for (var i = 0; info.length > i; i++) migrator.deleteRow(info[i]);
    };
} ]);

collection = Alloy.C("info", exports.definition, model);

exports.Model = model;

exports.Collection = collection;