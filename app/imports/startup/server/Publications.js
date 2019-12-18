import { Meteor } from 'meteor/meteor';
import { Offers } from '../../api/offer/Offer';
import { UserInfo } from '../../api/user/User';
import { Contacts } from '../../api/contact/Contact';

Meteor.publish('Offers', function publish() {
  return Offers.find();
});

Meteor.publish('UserInfo', function publish() {
  return UserInfo.find();
});

Meteor.publish('Contacts', function publish() {
  return Contacts.find();
});
