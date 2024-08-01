const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

//  Connect with DB
main()
  .then(() => {
    console.log("Connected to DB successfully!");
  })
  .catch((error) => {
    console.log(error);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/destination");
}

//  Function for adding data into the database
const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "66aa5fd25a14ee68abf5cab8",
  }));
  await Listing.insertMany(initData.data);
  console.log("Database initialized...");
};

initDB();
