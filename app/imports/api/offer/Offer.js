import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Offers = new Mongo.Collection('Offers');

/** Define a schema to specify the structure of each document in the collection. */
const OfferSchema = new SimpleSchema({
  beginDate: String,
  endDate: String,
  destination: String,
  estimatedArrival: String,
  seats: Number,
  price: Number,
  car: String,
  description: String,
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Offers.attachSchema(OfferSchema);

/** Make the collection and schema available to other code. */
export { Offers, OfferSchema };
