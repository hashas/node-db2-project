const express = require("express");

const db = require("./data/config")

const router = express.Router();

router.get("/", async (req, res, next) => {
	try {
		const cars = await db("cars")
		res.status(200).json(cars)
	} catch (err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	try {
		const payload = {
			vin: req.body.vin,
			make: req.body.make,
			model: req.body.model,
			mileage: req.body.mileage,
			transmission: req.body.transmission,
			"title status": req.body["title status"]
		}

		// translates to `INSERT INTO "cars" ("vin", "make", etc..) Values (?, ?, etc...)`
		// .insert() returns an array of the index (or indices if more than one) of the item
		// which was created, so if we want to return the newly created object we must 
		// destructure (i.e. unpack) the id value from the array
		const [id] = await db("cars").insert(payload)
		// I want to return the created car
		const newCar = await db("cars").where("id", id)
		res.status(201).json(newCar)
	} catch (err) {
		next(err)
	}
})

module.exports = router;
