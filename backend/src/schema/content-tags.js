module.exports = function (db) {
    db.schema.hasTable("content_tags").then(async function (exists) {
      if (!exists) {
        console.log("creating content_tags table");
        return await db.schema.createTable("content_tags", function (table) {
          table.integer("tag_id").unsigned();
          table
            .foreign("tag_id")
            .references("tags.id")
            .onDelete("SET NULL");

          table.integer("content_id").unsigned();
          table
            .foreign("content_id")
            .references("contents.id")
            .onDelete("SET NULL");
        });
      } else {
        console.log("content_tags table already exists");
      }
    });
  };
  