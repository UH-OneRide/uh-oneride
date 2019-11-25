import React from 'react';
import { Container, Header, Form, Input, TextArea, Button, Segment, Radio, Icon } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import NumField from 'uniforms-semantic/NumField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import { Offers } from '../../api/offer/Offer';

/** A simple static component to render some text for the landing page. */
class Offer extends React.Component {

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
                <Form.Field label='Origin' control='select'>
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
                <Form.Field label='Destination' control='select'>
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
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-start-date'
                    control={Input}
                    label='Start Date'
                    placeholder='Month/Day/Year'
                />
                <Form.Field
                    id='form-input-control-end-date'
                    control={Input}
                    label='End Date'
                    placeholder='Month/Day/Year'
                />
              </Form.Group>
              <Form.Group inline>
                <label>Select Days: </label>
                <Form.Field label='Monday' control='input' type='checkbox' />
                <Form.Field label='Tuesday' control='input' type='checkbox' />
                <Form.Field label='Wednesday' control='input' type='checkbox' />
                <Form.Field label='Thursday' control='input' type='checkbox' />
                <Form.Field label='Friday' control='input' type='checkbox' />
                <Form.Field label='Saturday' control='input' type='checkbox' />
                <Form.Field label='Sunday' control='input' type='checkbox' />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-start-school'
                    control={Input}
                    label='Start School'
                    placeholder='Hour/Minutes/AM'
                />
                <Form.Field
                    id='form-input-control-leave-school'
                    control={Input}
                    label='Leave School'
                    placeholder='Hour/Minutes/PM'
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Field label='Number of Passengers' control='select'>
                  <option value='UH Manoa'>0</option>
                  <option value='UH Manoa'>1</option>
                  <option value='UH Maui'>2</option>
                  <option value='UH West Oahu'>3</option>
                  <option value='UH Hilo'>4</option>
                </Form.Field>
                <Form.Field
                    id='form-input-control-price'
                    control={Input}
                    label='Price per ride'
                    placeholder='Price per ride'
                />
              </Form.Group>
            </Form>
            </Segment>
            <Header as='h3'>
              <Icon name='car' />
              <Header.Content>CAR INFO</Header.Content>
            </Header>
            <Segment attached className="padding-30">
              <Form>
                  <Form.Field
                      id='form-input-control-car-image'
                      control={Input}
                      label='Car image'
                      placeholder='Upload your car image'
                  />

                <Form.Group widths='equal'>
                  <Form.Field
                      id='form-input-control-car-make'
                      control={Input}
                      label='Make'
                      placeholder='Make'
                  />
                  <Form.Field
                      id='form-input-control-car-type'
                      control={Input}
                      label='Type'
                      placeholder='Type'
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field
                      id='form-input-control-car-year'
                      control={Input}
                      label='Year'
                      placeholder='Year'
                  />
                  <Form.Field
                      id='form-input-control-car-seats'
                      control={Input}
                      label='Number of Seats'
                      placeholder='Number of Seats'
                  />
                </Form.Group>
              </Form>
            </Segment>
            <Header as='h3'>
              <Icon name='drivers license' />
              <Header.Content>DRIVER INFO</Header.Content>
            </Header>
            <Segment attached className="padding-30">
              <Form>
                <Form.Field
                    id='form-input-control-driver-image'
                    control={Input}
                    label='Profile Image'
                    placeholder='Upload your profile image'
                />
                <Form.Group widths='equal'>
                  <Form.Field
                      id='form-input-control-first-name'
                      control={Input}
                      label='First name'
                      placeholder='First name'
                  />
                  <Form.Field
                      id='form-input-control-last-name'
                      control={Input}
                      label='Last name'
                      placeholder='Last name'
                  />
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Field
                      id='form-input-control-major'
                      control={Input}
                      label='Major/Area of Study/Job'
                      placeholder='Major'
                  />
                  <Form.Field label='Year in School' control='select'>
                    <option value="freshman">Freshman</option>
                    <option value='sophomore'>Sophomore</option>
                    <option value="junior">Junior</option>
                    <option value='senior'>Senior</option>
                    <option value='senior'>NA</option>
                  </Form.Field>
                </Form.Group>

                <Form.Field
                    style={{ height: 200 }}
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Comment'
                    placeholder='Comment'
                />

              </Form>
            </Segment><br/><br/>
            <Form>
              <Form.Field control={Button}>SUBMIT</Form.Field>
            </Form>
          </Container>
        </div>
    );
  }
}

export default Offer;
