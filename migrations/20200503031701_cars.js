
exports.up = async function(knex) {
	await knex.schema.createTable("cars", (table) => {
		// table.integer("id)".notNull().unique().primary()
		// same as above:
		table.increments("id")

		table.integer("vin").notNull().unique()
		table.text("make").notNull()
		table.text("model").notNull()
		table.float("mileage").notNull()
		table.text("transmission")
		table.text("title status")

	})
};

exports.down = function(knex) {
  
};


// CREATE TABLE IF NOT EXISTS "cars" (
// 	"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
// 	"vin" INTEGER NOT NULL UNIQUE,
// 	"make" TEXT NOT NULL,
// 	"model" TEXT NOT NULL,
// 	"mileage" FLOAT NOT NULL,
// 	"transmission" TEXT,
// 	"title status" TEXT
// );