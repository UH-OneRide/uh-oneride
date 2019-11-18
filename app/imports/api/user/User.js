import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Users = new Mongo.Collection('Users');

/** Define a schema to specify the structure of each document in the collection. */
const UserSchema = new SimpleSchema({
  name: String,
  email: String,
  password: String,
  riderRating: Number,
  isDriver: Boolean,
  isAdmin: Boolean,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Users.attachSchema(UserSchema);

/** Make the collection and schema available to other code. */
export { Users, UserSchema };
