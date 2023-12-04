module.exports = async function (db) {
  db.schema.hasTable("contents").then(async function (exists) {
    if (!exists) {
      console.log("creating contents table");
      // 'slider','post','address','package','popular-package','client','section-title'
      return await db.schema.createTable("contents", function (table) {
        table.increments().primary();
        table.string("title");
        table.text("details");
        table.text("master_location");
        table.integer("feature_category").unsigned().nullable();
        table.integer("created_by").unsigned().nullable();
        table.integer("last_updated_by").unsigned();
        table
          .foreign("last_updated_by")
          .references("users.id")
          .onDelete("SET NULL");
        table
          .foreign("feature_category")
          .references("categories.id")
          .onDelete("SET NULL");
        table.tinyint("status", 1).defaultTo(1);
        table.timestamps();

        table
          .foreign("created_by")
          .references("id")
          .inTable("users")
          .onDelete("SET NULL");
      });
    } else {
      console.log("contents table already exists");
    }
  });
};
