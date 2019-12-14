import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Profile } from '../components/Profile';
import { Offers } from '../../api/offer/Offer';

class DriverProfile extends React.Component {
  render() {
    return (
        <Profile userID={this.props.profile} offer={this.props.offers}/>
    );
  }
}

DriverProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  ready: PropTypes.bool.isRequired,
  offers: PropTypes.array,
};

export default withTracker(({ match }) => {
  // Get access to Stuff documents.
  const documentId = match.params._id;
  const subscription = Meteor.subscribe('Offers');
  return {
    profile: Meteor.users.findOne(documentId),
    offers: Offers.find({}).fetch(),
    ready: subscription.ready(),
  };
})(DriverProfile);
