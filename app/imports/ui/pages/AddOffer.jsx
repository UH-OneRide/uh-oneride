import React from 'react';
import { Container, Header, Form, Button, Segment, Icon, TextArea, Input } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { _ } from 'meteor/underscore';
import swal from 'sweetalert';
import { Offers } from '../../api/offer/Offer';

export function array_to_object(array) {
  return _.map(array, function (key_) { return { key: key_, text: key_, value: key_ }; });
}

export function time_object_to_string(object) {
  let minute = '';
  if (object.minute === 0) {
    minute = '00';
  } else if (object.minute === 5) {
    minute = '05';
  } else {
    minute = object.minute;
  }
  return `${object.hour}:${minute} ${object.phase}`;
}

export const locations = [
  'Diamond Head',
  'Hawaii Kai',
  'Honolulu',
  'Kahala',
  'Kailua',
  'Kapolei',
  'Ko Olina',
  'Lanikai',
  'Makakilo',
  'Mililani',
  'North Shore Oahu',
  'Pearl City',
  'Waikiki',
];
export const startLocations = array_to_object(locations);

export const campuses = [
    'UH Manoa',
    'UH Maui',
    'UH West Oahu',
    'UH Hilo',
    'Hawaii CC',
    'Honolulu CC',
    'Kapiolani CC',
    'Kauai CC',
    'Leeward CC',
    'Windward CC',
];
export const destinations = array_to_object(campuses);

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
class AddOffer extends React.Component {
  state = {
    start: '',
    destination: '',
    startDate: '',
    endDate: '',
    days: {
      M: false,
      T: false,
      W: false,
      Th: false,
      F: false,
      Sa: false,
      Su: false,
    },
    arrival: {
      hour: 12,
      minute: 0,
      phase: 'AM',
    },
    passengers: '',
    price: '',
    description: '',
  };

  submit = () => {
    const { start, destination, startDate, endDate, passengers, price, description } = this.state;
    const { days } = this.state;
    const ownerID = Meteor.user()._id;
    const arrivalTime = time_object_to_string(this.state.arrival);
    Offers.insert(
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

  handleTime = (e, { name, value }) => {
    const { arrival } = this.state;
    arrival[name] = value;
    console.log(arrival);
    this.setState({ arrival: arrival});
  }

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
                      name={'start'}/>
                  <Form.Dropdown
                      onChange={this.handleChange}
                      label='Destination'
                      selection
                      options={destinations}
                      placeholder={'Choose a Destination'}
                      name={'destination'}/>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Input
                      label='Start Date'
                      placeholder='MM/DD/YYYY'
                      name={'startDate'}
                      onChange={this.handleDate}
                  />
                  <Form.Input
                      label='End Date'
                      placeholder='MM/DD/YYYY'
                      name={'endDate'}
                      onChange={this.handleDate}
                  />
                </Form.Group><br/>
                <Form.Group inline>
                  <label>Select Days: </label>
                  <Form.Checkbox label='Monday' name={'M'} onChange={this.handleDayToggle}/>
                  <Form.Checkbox label='Tuesday' name={'T'} onChange={this.handleDayToggle}/>
                  <Form.Checkbox label='Wednesday'name={'W'} onChange={this.handleDayToggle}/>
                  <Form.Checkbox label='Thursday' name={'Th'} onChange={this.handleDayToggle}/>
                  <Form.Checkbox label='Friday' name={'F'} onChange={this.handleDayToggle}/>
                  <Form.Checkbox label='Saturday' name={'Sa'} onChange={this.handleDayToggle}/>
                  <Form.Checkbox label='Sunday' name={'Su'} onChange={this.handleDayToggle}/>
                </Form.Group><br/>
                <Form.Group>
                  <label>ETA at Destination </label>
                  <Form.Dropdown
                      onChange={this.handleTime}
                      selection
                      options={hours}
                      placeholder={'Hour'}
                      name={'hour'}/>
                  <Form.Dropdown
                      onChange={this.handleTime}
                      selection
                      options={minutes}
                      placeholder={'Minute'}
                      name={'minute'}/>
                  <Form.Dropdown
                      onChange={this.handleTime}
                      selection
                      options={phase}
                      placeholder={'AM/PM'}
                      name={'phase'}/>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Dropdown
                      onChange={this.handleChange}
                      label='Number of Passengers'
                      selection
                      options={num_passengers}
                      placeholder={'Number of Passengers'}
                      name={'passengers'}/>
                  <Form.Input
                      label='Price per ride ($)'
                      placeholder='Price per ride'
                      name={'price'}
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
                    name={'description'}
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

export default AddOffer;
