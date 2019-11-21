import React from 'react';
import { Container, Form, Input, TextArea, Header, Segment } from 'semantic-ui-react';

class Contact extends React.Component {
  render() {
    return (
        <div className="content">
          <Container className="content-container">
            <Header as="h1" textAlign="center">Contact</Header>
            <Segment attached className="padding-30">
            <Form>
              <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-name'
                    control={Input}
                    label='Name'
                    placeholder='Name'
                />
                <Form.Field
                    id='form-input-control-email'
                    control={Input}
                    label='Email'
                    placeholder='emailaddress@hawaii.edu'
                />
              </Form.Group>
              <Form.Field
                  id='form-input-control-subject'
                  control={Input}
                  label='Subject'
                  placeholder='Subject'
              />
              <Form.Field
                  style={{ height: 200 }}
                  id='form-textarea-control-opinion'
                  control={TextArea}
                  label='Content'
                  placeholder='Content'
              />
              <Form.Button content='SUBMIT' />
            </Form>
            </Segment>
          </Container>
        </div>
    );
  }
}

export default Contact;
