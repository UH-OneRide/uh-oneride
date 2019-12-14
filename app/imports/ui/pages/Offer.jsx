import React from 'react';
import { Container, Header, Form, Input, Button, Segment, Icon, TextArea, Radio } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { _ } from 'meteor/underscore';
import swal from 'sweetalert';
import { Offers } from '../../api/offer/Offer';

export function array_to_object(array) {
  return _.map(array, function (key_) { return { key: key_, text: key_, value: key_ }; });
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
]
const startLocations = array_to_object(locations);

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
]
const destinations = array_to_object(campuses);

/** A simple static component to render some text for the landing page. */
class Offer extends React.Component {
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
    //arrivalTime: '',
    passengers: '',
    price: '',
  };

  submit = () => {
//    const { start, destination, startDate, endDate, days, arrivalTime, passengers, price } = this.state;
    const { start, destination, startDate, endDate, passengers, price } = this.state;
    console.log(this.state);
    const { days } = this.state;
    console.log(days);

    const ownerID = Meteor.user()._id;
//    Offers.insert({ start, destination, startDate, endDate, days, arrivalTime, passengers, price, ownerID },
    Offers.insert({ start, destination, startDate, endDate, days, passengers, price, ownerID },
      (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Item added successfully', 'success');
          }
        });
  }

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
  }

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
              <Form.Group>

                <Form.Field>
                  <Radio
                      label='Round Trip'
                      name='radioGroup'
                      value='Round Trip'
                      onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                      label='One Way (From School)'
                      name='radioGroup'
                      value='One Way (From School)'
                      onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                      label='One Way (To School)'
                      name='radioGroup'
                      value='One Way (To School)'
                      onChange={this.handleChange}
                  />
                </Form.Field>
              </Form.Group>
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
              <Form.Group widths='equal'>
                <Form.Input
                  label='Start School (estimated arrival time to school)'
                  placeholder='Hour/Minutes/AM'
                  name={'arrivalTime'}
                  onChange={this.handleChange}
              />
                <Form.Field
                    id='form-input-control-leave-school'
                    control={Input}
                    label='Leave School (estimated departure time from school)'
                    placeholder='Hour/Minutes/PM'
                    onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input label='Number of Passengers' name={'passengers'} onChange={this.handleChange}/>
                <Form.Input
                    label='Price per ride ($)'
                    placeholder='Price per ride'
                    name={'price'}
                    onChange={this.handleChange}
                />
              </Form.Group>
                <Form.Input
                    style={{ height: 200 }}
                    id='form-textarea-control-opinion'
                    label='Description'
                    control={TextArea}
                    placeholder=''
                    name={ 'comment' }
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

export default Offer;
