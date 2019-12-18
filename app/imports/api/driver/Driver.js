import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Drivers = new Mongo.Collection('Drivers');

/** Define a schema to specify the structure of each document in the collection. */
const DriverSchema = new SimpleSchema({
  ownerID: String,
  brand: String,
  model: String,
  type: String,
  year: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Drivers.attachSchema(DriverSchema);

/** Make the collection and schema available to other code. */
export { Drivers, DriverSchema };
