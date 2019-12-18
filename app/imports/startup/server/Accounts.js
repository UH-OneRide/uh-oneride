import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { _ } from 'meteor/underscore';
import { UserInfo } from '../../api/user/User';

/* eslint-disable no-console */

function createUser(user) {
  console.log(`  Creating user ${user.email}.`);
  const userID = Accounts.createUser({
    username: user.firstName,
    email: user.email,
    password: user.password,
  });
  _.each(user.role, function (element) {
    Roles.addUsersToRoles(userID, element);
  });
  UserInfo.insert({
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    job: user.job,
    hobbies: user.hobbies,
    image: user.image,
    userID: userID,
    isDriver: user.isDriver,
    isAdmin: user.isAdmin,
    });
}

/** When running app for first time, pass a settings file to set up a default user account. */
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.map((user) => createUser(user));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}
