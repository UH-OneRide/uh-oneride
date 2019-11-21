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
    const { value } = this.state
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
                <Form.Field label='Departure' control='select'>
                  <option value='male'></option>
                  <option value='female'></option>
                </Form.Field>
                <Form.Field label='Destination' control='select'>
                  <option value='male'>UH Manoa</option>
                  <option value='female'>UH West Oahu</option>
                </Form.Field>
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-start-date'
                    control={Input}
                    label='Start Date'
                    placeholder='Start Date'
                />
                <Form.Field
                    id='form-input-control-end-date'
                    control={Input}
                    label='End Date'
                    placeholder='End Date'
                />
              </Form.Group>
              <Form.Group inline>
                <label>Select Days: </label>
                <Form.Field
                    control={Radio}
                    label='Monday'
                    value='1'
                    checked={value === '1'}
                    onChange={this.handleChange}
                />
                <Form.Field
                    control={Radio}
                    label='Tuesday'
                    value='2'
                    checked={value === '2'}
                    onChange={this.handleChange}
                />
                <Form.Field
                    control={Radio}
                    label='Wednesday'
                    value='3'
                    checked={value === '3'}
                    onChange={this.handleChange}
                />
                <Form.Field
                    control={Radio}
                    label='Thusday'
                    value='4'
                    checked={value === '4'}
                    onChange={this.handleChange}
                />
                <Form.Field
                    control={Radio}
                    label='Friday'
                    value='5'
                    checked={value === '5'}
                    onChange={this.handleChange}
                />
                <Form.Field
                    control={Radio}
                    label='Saturday'
                    value='6'
                    checked={value === '6'}
                    onChange={this.handleChange}
                />
                <Form.Field
                    control={Radio}
                    label='Sunday'
                    value='7'
                    checked={value === '7'}
                    onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-start-school'
                    control={Input}
                    label='Start School'
                    placeholder='Start School'
                />
                <Form.Field
                    id='form-input-control-leave-school'
                    control={Input}
                    label='Leave School'
                    placeholder='Leave School'
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
                      id='form-input-control-car-type'
                      control={Input}
                      label='Vehicle Type'
                      placeholder='Vehicle Type'
                  />
                  <Form.Field
                      id='form-input-control-car-year'
                      control={Input}
                      label='Model Year'
                      placeholder='Model Year'
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
