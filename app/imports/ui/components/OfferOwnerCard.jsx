import React from 'react';
import { Button, Card, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { getFormattedDate, getRideDays } from './Offer';

/** Renders a single offer in the Find page. */
export class OfferOwnerCard extends React.Component {

  render() {
    return (
        <Card>
          <Card.Content className="card">
            <Card.Header>
              {this.props.offer.start} <Icon name='arrow right' /> {this.props.offer.destination}<br/>
            </Card.Header>
            <Card.Description>
              {getFormattedDate(this.props.offer.startDate)} - {getFormattedDate(this.props.offer.endDate)}<br/>
              {getRideDays(this.props.offer.days)}<br/>
              Passengers: {this.props.offer.passengers}<br/>
              Price: ${this.props.offer.price}
            </Card.Description>
          </Card.Content>
          <Card.Content className="card">
            <div className='ui two buttons'>
              <Button
                  basic color='green'
                  as={NavLink}
                  activeClassName="active"
                  exact
                  to={`/editoffer/${this.props.offer._id}`}
                  key='offer'>
                Edit
              </Button>
              <Button basic color='red'>
                Remove
              </Button>
            </div>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
OfferOwnerCard.propTypes = {
  offer: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(OfferOwnerCard);
