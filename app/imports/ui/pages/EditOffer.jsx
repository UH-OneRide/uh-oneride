import React from 'react';
import { Container, Header, Form, Button, Segment, Icon, TextArea } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Offers } from '../../api/offer/Offer';
import { array_to_object, destinations, startLocations, time_object_to_string } from './AddOffer';
import { getFormattedDate } from '../components/Offer';

export function time_string_to_object(string) {
  if (string[1] === ':') {
    return {
      hour: string[0],
      minute: string.substring(2, 4),
      phase: string.substring(5, 7),
    };
  }
  return {
    hour: string.substring(0, 2),
    minute: string.substring(3, 5),
    phase: string.substring(6, 8),
  };
}

const raw_minutes = [];
for (let i = 0; i < 60; i += 5) {
  raw_minutes.push(i);
}
const minutes = array_to_object(raw_minutes);

const raw_hours = [];
for (let i = 1; i <= 12; i++) {
  raw_hours.push(i);
}
const hours = array_to_object(raw_hours);

const raw_phase = ['AM', 'PM'];
const phase = array_to_object(raw_phase);

const raw_passengers = ['0', '1', '2', '3', '4', '5+'];
const num_passengers = array_to_object(raw_passengers);

/** A simple static component to render some text for the landing page. */
class EditOffer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: this.props.offer.start,
      destination: this.props.offer.destination,
      startDate: this.props.offer.startDate,
      endDate: this.props.offer.endDate,
      days: this.props.offer.days,
      arrivalTime: time_string_to_object(this.props.offer.arrivalTime),
      passengers: this.props.offer.passengers,
      price: this.props.offer.price,
      description: this.props.offer.description,
    };
  }

  submit = () => {
    const { start, destination, startDate, endDate, passengers, price, description } = this.state;
    const { days } = this.state;
    const ownerID = Meteor.user()._id;
    const arrivalTime = time_object_to_string(this.state.arrival);
    Offers.update(
        { start, destination, startDate, endDate, days, arrivalTime, passengers, price, description, ownerID },
      (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Item added successfully', 'success');
          }
        },
        );
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleDayToggle = (e, { name }) => {
    const { days } = this.state;
    days[name] = !days.name;
    this.setState({ days: days });
  };

  handleDate = (e, { name, value }) => {
    const x = value.split('/');
    if (x.length === 3) {
      const [month, day, year] = x;
      this.setState({ [name]: new Date(`${year}-${month}-${day}`) });
    } else {
      this.setState({ [name]: '' });
    }
  };

  render() {

    return (
        <div className="content">
          <Container className="content-container">
            <Header as="h1" textAlign="center">Offer a Ride</Header>
            <Header as='h3'>
              <Icon name='calendar alternate' size='small' />
              <Header.Content>SCHEDULE AND PICK-UP INFO</Header.Content>
            </Header>
            <Segment attached className="padding-30">
              <Form>
                <Form.Group widths='equal'>
                  <Form.Dropdown
                      onChange={this.handleChange}
                      label='Origin'
                      selection
                      options={startLocations}
                      placeholder={'Choose a Starting Location'}
                      defaultValue={this.state.start}
                      name={'start'}/>
                  <Form.Dropdown
                      onChange={this.handleChange}
                      label='Destination'
                      selection
                      options={destinations}
                      placeholder={'Choose a Destination'}
                      defaultValue={this.state.destination}
                      name={'destination'}/>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Input
                      label='Start Date'
                      placeholder='MM/DD/YYYY'
                      name={'startDate'}
                      defaultValue={getFormattedDate(this.state.startDate)}
                      onChange={this.handleDate}
                  />
                  <Form.Input
                      label='End Date'
                      placeholder='MM/DD/YYYY'
                      name={'endDate'}
                      defaultValue={getFormattedDate(this.state.endDate)}
                      onChange={this.handleDate}
                  />
                </Form.Group><br/>
                <Form.Group inline>
                  <label>Select Days: </label>
                  <Form.Checkbox
                      label='Monday' name={'M'} onChange={this.handleDayToggle} defaultValue={this.state.days.M}/>
                  <Form.Checkbox
                      label='Tuesday' name={'T'} onChange={this.handleDayToggle} defaultValue={this.state.days.T}/>
                  <Form.Checkbox
                      label='Wednesday' name={'W'} onChange={this.handleDayToggle} defaultValue={this.state.days.W}/>
                  <Form.Checkbox
                      label='Thursday' name={'Th'} onChange={this.handleDayToggle} defaultValue={this.state.days.Th}/>
                  <Form.Checkbox
                      label='Friday' name={'F'} onChange={this.handleDayToggle} defaultValue={this.state.days.F}/>
                  <Form.Checkbox
                      label='Saturday' name={'Sa'} onChange={this.handleDayToggle} defaultValue={this.state.days.Sa}/>
                  <Form.Checkbox
                      label='Sunday' name={'Su'} onChange={this.handleDayToggle} defaultValue={this.state.days.Su}/>
                </Form.Group><br/>
                <Form.Group>
                  <label>ETA at Destination </label>
                  <Form.Dropdown
                      onChange={this.handleTime}
                      selection
                      options={hours}
                      placeholder={'Hour'}
                      defaultValue={this.state.arrivalTime.hour}
                      name={'arrivalHour'}/>
                  <Form.Dropdown
                      onChange={this.handleTime}
                      selection
                      options={minutes}
                      placeholder={'Minute'}
                      defaultValue={this.state.arrivalTime.minute}
                      name={'arrivalMinute'}/>
                  <Form.Dropdown
                      onChange={this.handleTime}
                      selection
                      options={phase}
                      placeholder={'AM/PM'}
                      defaultValue={this.state.arrivalTime.phase}
                      name={'arrivalPhase'}/>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Dropdown
                      onChange={this.handleChange}
                      label='Number of Passengers'
                      selection
                      options={num_passengers}
                      placeholder={'Number of Passengers'}
                      defaultValue={this.state.passengers}
                      name={'passengers'}/>
                  <Form.Input
                      label='Price per ride ($)'
                      placeholder='Price per ride'
                      name={'price'}
                      defaultValue={this.state.price}
                      onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Input
                    onChange={this.handleChange}
                    style={{ height: 200 }}
                    id='form-textarea-control-opinion'
                    label='Description'
                    control={TextArea}
                    placeholder=''
                    defaultValue={this.state.description}
                    name={ 'description' }
                />
              </Form><br/>
              <Form>
                <Form.Field fluid positive pos control={Button} onClick={this.submit}>SUBMIT</Form.Field>
              </Form>
            </Segment>
          </Container>
        </div>
    );
  }
}

EditOffer.propTypes = {
  ready: PropTypes.bool.isRequired,
  offer: PropTypes.object.isRequired,
};

export default withTracker(({ match }) => {
  const documentId = match.params._id;
  const subscription = Meteor.subscribe('Offers');
  const subscription1 = Meteor.subscribe('UserInfo');
  return {
    offer: Offers.findOne({ _id: documentId }),
    ready: subscription.ready() && subscription1.ready(),
  };
})(EditOffer);
