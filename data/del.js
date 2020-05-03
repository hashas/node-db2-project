CREATE TABLE IF NOT EXISTS "cars" (
	"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	"vin" INTEGER NOT NULL UNIQUE,
	"make" TEXT NOT NULL,
	"model" TEXT NOT NULL,
	"mileage" FLOAT NOT NULL,
	"transmission" TEXT,
	"title status" TEXT
);