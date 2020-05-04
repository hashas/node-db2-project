
exports.seed = async function(knex) {
    // clear out all the rows in our table when we run seeds so we don't get an error when they already exist
    await knex("cars").truncate()
    await knex("cars").insert([
        { vin: 830743, make: "bmw", model: "mini", mileage: 30000, transmission: "automatic", "title status": "write-off" },
        { vin: 032845, make: "bmw", model: "i3", mileage: 20000, transmission: "automatic", "title status": "electric"},
        { vin: 246134, make: "bmw", model: "i3", mileage: 30000, transmission: "automatic", "title status": "hybrid" },
        { vin: 902345, make: "volkswagen", model: "golf", mileage: 70000, transmission: "automatic", "title status": "lots of work required" }
    ])

  // // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
  //     Inserts seed entries
  //     return knex('table_name').insert([
  //       {id: 1, colName: 'rowValue1'},
  //       {id: 2, colName: 'rowValue2'},
  //       {id: 3, colName: 'rowValue3'}
  //     ]);
  //   });
};
