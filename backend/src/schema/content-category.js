module.exports = function (db) {
    db.schema.hasTable("content_categories").then(async function (exists) {
      if (!exists) {
        console.log("creating content_categories table");
        return await db.schema.createTable("content_categories", function (table) {
          table.integer("category_id").unsigned();
          table
            .foreign("category_id")
            .references("categories.id")
            .onDelete("SET NULL");

          table.integer("content_id").unsigned();
          table
            .foreign("content_id")
            .references("contents.id")
            .onDelete("SET NULL");
        });
      } else {
        console.log("content_categories table already exists");
      }
    });
  };
  