import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Card, Container, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Contacts } from '../../api/contact/Contact';
import { ContactCard } from '../components/ContactCard';

class ContactView extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <div className="content">
          <Container className="content-container">
            <Card.Group itemsPerRow={1}>
              {this.props.contacts.map((contact, index) => <ContactCard
                  key={index}
                  contact={contact}
              />)}
            </Card.Group>
          </Container>
        </div>
    );
  }
}

ContactView.propTypes = {
  contacts: PropTypes.array,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe('Contacts');
  return {
    contacts: Contacts.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ContactView);
