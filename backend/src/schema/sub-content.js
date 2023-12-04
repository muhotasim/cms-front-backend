module.exports = async function (db) {
    db.schema.hasTable("contents_details").then(async function (exists) {
      if (!exists) {
        console.log("creating contents_details table");
        // 'slider','post','address','package','popular-package','client','section-title'
        return await db.schema.createTable("contents_details", function (table) {
          table.increments().primary();
          table.string("name");
          table.string("loc");
          table.string("mime");
          table.integer("content_id").unsigned().nullable();
          table
            .foreign("content_id")
            .references("contents.id")
            .onDelete("SET NULL");
        });
      } else {
        console.log("contents_details table already exists");
      }
    });
  };
  