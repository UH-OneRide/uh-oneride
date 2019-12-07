import React from 'react';
import { Container, Grid, Segment, Card, Image, Icon, Header, Button, Table, Divider, Form } from 'semantic-ui-react';

class DriverProfile extends React.Component {
  render() {
    return (
        <div className="content">
          <Container className="content-container">
              <Grid verticalAlign='top' textAlign='center' container>
                <Grid.Row>
                  <Grid.Column width={5} verticalAlign='top'>
                      <Header as='h3'>YOUR OFFER</Header>
                    <Card>
                      <Card.Content className="card">
                        <Card.Header>Hawaii Kai <Icon name='arrow right' /> UH Manoa<br/>
                          (Round Trip)</Card.Header><br/>
                        <Card.Description>
                          Posted on 12/6/2019
                        </Card.Description>
                      </Card.Content>
                      <Card.Content className="card">
                        <div className='ui two buttons'>
                          <Button basic color='green'>
                            Edit
                          </Button>
                          <Button basic color='red'>
                            Remove
                          </Button>
                        </div>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Card.Content className="card">
                        <Card.Header>UH Manoa <Icon name='arrow right' /> Waikiki<br/>
                         (One Way)</Card.Header><br/>
                        <Card.Description>
                          Posted on 12/3/2019
                        </Card.Description>
                      </Card.Content>
                      <Card.Content className="card">
                        <div className='ui two buttons'>
                          <Button basic color='green'>
                            Edit
                          </Button>
                          <Button basic color='red'>
                            Remove
                          </Button>
                        </div>
                      </Card.Content>
                    </Card>
                  </Grid.Column>

                  <Grid.Column width={11} textAlign='left'>
                    <Segment attached className="padding-30">
                      <Divider horizontal>
                        <Header as='h4'>
                          <Icon name='calendar alternate' />
                          ABOUT
                        </Header>
                      </Divider>
                      <Table definition>
                        <Table.Body>
                          <Table.Row>
                            <Table.Cell width={5}>Email</Table.Cell>
                            <Table.Cell>john@foo.com</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Password</Table.Cell>
                            <Table.Cell>*******</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>First Name</Table.Cell>
                            <Table.Cell>John</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Last Name</Table.Cell>
                            <Table.Cell>Foo</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Major/Area of Study/Job</Table.Cell>
                            <Table.Cell>Computer Science</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Interests and hobbies</Table.Cell>
                            <Table.Cell>Fishing, Surfing, Hainging with friends</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell >Profile Image</Table.Cell>
                            <Table.Cell>
                              <Image
                                  size='mini'
                                  src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                              />
                            </Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                      <Divider horizontal>
                        <Header as='h4'>
                          <Icon name='car' />
                          CAR INFO
                        </Header>
                      </Divider>

                      <Table definition>
                        <Table.Body>
                          <Table.Row>
                            <Table.Cell>Car Image</Table.Cell>
                            <Table.Cell>
                              <Image
                                  size='mini'
                                  src='/images/car-image.jpg'
                              />
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell width={5}>Make</Table.Cell>
                            <Table.Cell>Toyota</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Model</Table.Cell>
                            <Table.Cell>Corolla</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Type</Table.Cell>
                            <Table.Cell>Sedan</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Year</Table.Cell>
                            <Table.Cell>2015</Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                      <Form.Button fluid positive className="green-button" content="EDIT"/>
                    </Segment>
                    <br/>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

          </Container>
        </div>
    );
  }
}

export default DriverProfile;
