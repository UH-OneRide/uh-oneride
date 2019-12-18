import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Offers } from '../../api/offer/Offer';
import { UserInfo } from '../../api/user/User';
import { DetailedOffer } from '../components/DetailedOffer';

class OfferView extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <DetailedOffer userID={this.props.profile} offer={this.props.offer}/>
    );
  }
}

OfferView.propTypes = {
  profile: PropTypes.object.isRequired,
  ready: PropTypes.bool.isRequired,
  offer: PropTypes.object.isRequired,
};

export default withTracker(({ match }) => {
  const documentId = match.params._id;
  const subscription = Meteor.subscribe('Offers');
  const subscription1 = Meteor.subscribe('UserInfo');
  const offer = Offers.findOne({ _id: documentId });
  return {
    offer: offer,
    profile: UserInfo.findOne({ userID: offer.ownerID }),
    ready: subscription.ready() && subscription1.ready(),
  };
})(OfferView);
