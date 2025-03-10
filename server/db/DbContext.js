import HouseSchema from "../models/House"
import ValueSchema from "../models/Value";
import mongoose from "mongoose";

import CarSchema from "../models/Car"

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Cars = mongoose.model("Car", CarSchema);
  Houses = mongoose.model("House", HouseSchema)
}

export const dbContext = new DbContext();
