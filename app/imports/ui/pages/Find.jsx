import React from 'react';
import { Container, Button, Card, Icon, Form, Segment, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Offer } from '../components/Offer';
import { Offers } from '../../api/offer/Offer';
import { UserInfo } from '../../api/user/User';

/** A simple static component to render some text for the landing page. */
class Find extends React.Component {

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <div className="content">
          <Container className="content-container">
            <Card.Group itemsPerRow={2}>
              {this.props.offers.map((offer, index) => <Offer
                      key={index}
                      offer={offer}
                      user={_.findWhere(this.props.users, { userID: offer.ownerID })}
                  />)}
            </Card.Group>
          </Container>
        </div>
    );
  }
}
/** Require an array of Stuff documents in the props. */
Find.propTypes = {
  offers: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  const subscription = Meteor.subscribe('Offers');
  const subscription1 = Meteor.subscribe('UserInfo');
  return {
    offers: Offers.find({}).fetch(),
    users: UserInfo.find({}).fetch(),
    ready: subscription.ready() && subscription1.ready(),
  };
})(Find);
