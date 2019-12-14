import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Offers = new Mongo.Collection('Offers');

/** Define a schema to specify the structure of each document in the collection. */
const OfferSchema = new SimpleSchema({
  start: String,
  destination: String,
  startDate: Date,
  endDate: Date,
  days: { type: Object, blackbox: true },
//  arrivalTime: String,
  passengers: Number,
  price: Number,
  ownerID: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Offers.attachSchema(OfferSchema);

/** Make the collection and schema available to other code. */
export { Offers, OfferSchema };
