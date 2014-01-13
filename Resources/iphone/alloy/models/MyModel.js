exports.definition = {
    config: {
        columns: {
            title: "text",
            image: "text",
            timestamp: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "myModel"
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("myModel", exports.definition, [ function(migration) {
    migration.name = "myModel";
    migration.id = "201211031535764";
    migration.up = function(migrator) {
        migrator.createTable({
            columns: {
                title: "text",
                image: "text",
                timestamp: "text"
            }
        });
    };
    migration.down = function(migrator) {
        migrator.dropTable("myModel");
    };
} ]);

collection = Alloy.C("myModel", exports.definition, model);

exports.Model = model;

exports.Collection = collection;