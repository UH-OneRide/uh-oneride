import React from 'react';
import { Header, Card, Container } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Offer } from '../components/Offer';
import { Offers } from '../../api/offer/Offer';

/** A simple static component to render some text for the landing page. */
class Find extends React.Component {
  render() {
    return (
        <Container>
          <Header as="h1" textAlign="center">Find a Ride</Header>
          <Card.Group>
            {this.props.offers.map((offer, index) => <Offer key={index} offer={offer}/>)}
          </Card.Group>
        </Container>
    );
  }
}
/** Require an array of Stuff documents in the props. */
Find.propTypes = {
  offers: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Offers');
  return {
    offers: Offers.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Find);
