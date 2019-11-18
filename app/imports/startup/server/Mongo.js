import { Meteor } from 'meteor/meteor';
import { Contacts } from '../../api/contact/Contact.js';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addContact(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Contacts.insert(data);
}

/** Initialize the collection if empty. */
if (Contacts.find().count() === 0) {
  if (Meteor.settings.defaultContact) {
    console.log('Creating default contacts.');
    Meteor.settings.defaultContact.map(data => addContact(data));
  }
}
