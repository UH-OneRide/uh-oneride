import React from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { _ } from 'meteor/underscore';

export function getFormattedDate(offer) {
  return `${offer.getMonth() + 1}/${offer.getDate()}/${offer.getFullYear()}`;
}

export function getRideDays(object) {
  let days = '';
  _.each(_.keys(_.object(_.filter(_.pairs(object), function (obj) {
        return obj[1];
      }))),
      function (day) {
        let x = '';
        switch (day) {
          case 'M':
            x = 'Mon';
            break;
          case 'T':
            x = 'Tue';
            break;
          case 'W':
            x = 'Wed';
            break;
          case 'Th':
            x = 'Thu';
            break;
          case 'F':
            x = 'Fri';
            break;
          case 'Sa':
            x = 'Sat';
            break;
          case 'Su':
            x = 'Sun';
            break;
          default:
            x = day;
        }
        days += `${x}, `;
      });
  days = days.substring(0, days.length - 2);
  return days;
}

  /** Renders a single offer in the Find page. */
export class Offer extends React.Component {

  render() {
    return (
        <Card>
          <Card.Content className="card-style">
            <div className="card-left">
              <Image
                  size='small'
                  src={this.props.user.image}
              /><br/>
              <Card.Header size="medium">{this.props.user.firstName} {this.props.user.lastName}</Card.Header>
            </div>
            <Card.Header>{this.props.offer.start} <Icon name='arrow right'/> {this.props.offer.destination}
            </Card.Header><br/>
            <Card.Meta>DATE: {getFormattedDate(this.props.offer.startDate)} -
              {getFormattedDate(this.props.offer.endDate)}</Card.Meta>
            <Card.Meta>DAYS: {getRideDays(this.props.offer.days)}</Card.Meta>
            <Card.Meta>ETA: {this.props.offer.arrivalTime}</Card.Meta>
            <Card.Meta>Cost: ${this.props.offer.price} per ride</Card.Meta><br/>

            <Button
                as={NavLink}
                activeClassName="active"
                exact
                to={`/offer/${this.props.offer._id}`}
                key='offer'>More Details</Button>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Offer.propTypes = {
  offer: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Offer);
