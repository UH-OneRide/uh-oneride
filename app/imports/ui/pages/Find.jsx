import React from 'react';
import { Container, Button, Card, Image, Icon, Form, Segment } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Offer } from '../components/Offer';
import { Offers } from '../../api/offer/Offer';

/** A simple static component to render some text for the landing page. */
class Find extends React.Component {
  render() {
    return (
        <div className="content">
          <Container className="content-container">
            <Segment className="search-box">
              <Form>
              <Form.Group >
                <Form.Field label='Select Your Origin' control='select' width="6">
                  <option value='Diamond Head'>Diamond Head</option>
                  <option value='Hawaii Kai'>Hawaii Kai</option>
                  <option value='Honolulu'>Honolulu</option>
                  <option value='Kahala'>Kahala</option>
                  <option value='Kailua'>Kailua</option>
                  <option value='Kapolei'>Kapolei</option>
                  <option value='Ko Olina'>Ko Olina</option>
                  <option value='Lanikai'>Lanikai</option>
                  <option value='Makakilo'>Makakilo</option>
                  <option value='Mililani'>Mililani</option>
                  <option value='North Shore Oahu'>North Shore Oahu</option>
                  <option value='Pearl City'>Pearl City</option>
                  <option value='Waikiki'>Waikiki</option>
                </Form.Field>
                <Form.Field label='Select Your Destination' control='select' width="6">
                  <option value='UH Manoa'>UH Manoa</option>
                  <option value='UH Maui'>UH Maui</option>
                  <option value='UH West Oahu'> UH West Oahu</option>
                  <option value='UH Hilo'>UH Hilo</option>
                  <option value='Hawaii CC'>Hawaii CC</option>
                  <option value='Honolulu CC'>Honolulu CC</option>
                  <option value='Kapiolani CC'>Kapiolani CC</option>
                  <option value='Kauai CC'>Kauai CC</option>
                  <option value='Leeward CC'>Leeward CC</option>
                  <option value='Windward CC'>Windward CC</option>
                </Form.Field>
                <Form.Field>
                  <br/>
                <Button positive style={{ width: 200 }} >
                  <Icon name='search' size='small' />
                  Find a Ride</Button>
                </Form.Field>
              </Form.Group>
            </Form>
            </Segment>
            <Card.Group itemsPerRow={2}>
              {this.props.offers.map((offer, index) => <Offer key={index} offer={offer} />)}
            </Card.Group>
          </Container>
        </div>
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
