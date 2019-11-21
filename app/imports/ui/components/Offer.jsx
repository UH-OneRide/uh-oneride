import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
export class Offer extends React.Component {
  render() {
    return (
        <Card>
          <Card.Content>
            <Card.Header>{this.props.offer.owner}</Card.Header>
            <Card.Description>
              {this.props.offer.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            From: {this.props.offer.beginDate}
            To: {this.props.offer.endDate}

            Destination: {this.props.offer.destination}

            ETA at Destination: {this.props.offer.estimatedArrival}

            Seats Available: {this.props.offer.seats}

            Price: ${this.props.offer.price}
          </Card.Content>
          <Card.Content extra>
            Link to Profile
          </Card.Content>

        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Offer.propTypes = {
  offer: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Offer);
