import React from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { _ } from 'meteor/underscore';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
export class Offer extends React.Component {

  getFormattedDate(offer) {
    return `${offer.getMonth() + 1}/${offer.getDate()}/${offer.getFullYear()}`
  }

  getRideDays(object) {
    let days = '';
    _.each(_.keys(_.object(_.filter(_.pairs(object), function(obj) { return obj[1]; }))),
        function(day){
      let x = '';
      switch (day){
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
    })
    days = days.substring(0, days.length - 2);
    console.log(days)
    return days;
}

render() {
 return (
     <Card className="card-style">
       <Card.Content>
         <div className="card-left">
           <Image
               size='small'
               src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
           /><br/>
           <Card.Header size="medium">Daniel Kim</Card.Header>
           <Card.Meta>Computer Science, Junior</Card.Meta>
         </div>
         <Card.Header>{this.props.offer.start} <Icon name='arrow right' /> {this.props.offer.destination}</Card.Header><br/>
         <Card.Meta>DATE: {this.getFormattedDate(this.props.offer.startDate)} -
           {this.getFormattedDate(this.props.offer.endDate)}</Card.Meta>
         <Card.Meta>DAYS: { this.getRideDays(this.props.offer.days) }</Card.Meta>
         <Card.Meta>TIME: 8:00AM - 4:00PM</Card.Meta>
         <Card.Meta>Cost: ${ this.props.offer.price } per ride</Card.Meta><br/>
         <Button positive>More Details</Button>
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
