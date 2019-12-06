import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header } from 'semantic-ui-react';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  render() {
    Meteor.logout();
    return (
        <div className="content">
          <Container className="content-container">
            <Header as="h2" textAlign="center">
              You are signed out.
            </Header>
          </Container></div>
    );
  }
}
