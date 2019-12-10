import React from 'react';
import { Container, Grid, Segment, Card, Image, Icon, Header, Button, Table, Divider } from 'semantic-ui-react';

class DriverProfile extends React.Component {
  render() {
    return (
        <div className="content">
          <Container className="content-container">
              <Grid verticalAlign='top' textAlign='center' container>
                <Grid.Row>
                  <Grid.Column width={5} verticalAlign='top'>
                    <Card verticalAlign='top'>
                      <Image src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' wrapped ui={false} />
                      <Card.Content>
                        <Card.Header>Daniel Kim</Card.Header>
                        <Card.Meta>danielkim@hawaii.edu</Card.Meta>
                        <Card.Description>
                          Computer Science, Junior
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <a>
                          <Button positive><Icon name='mail' />Send an Email</Button>
                        </a>
                      </Card.Content>
                    </Card>
                  </Grid.Column>

                  <Grid.Column width={11} textAlign='left'>
                    <Segment attached className="padding-30">
                      <Image src='/images/car-image.jpg' verticalAlign='middle' size='tiny' circular />
                      <span className='header-location' size='large'>Hawaii Kai <Icon name='arrow right' /> UH Manoa</span>
                      <Divider horizontal>
                        <Header as='h4'>
                          <Icon name='calendar alternate' />
                          SCHEDULE AND PICK-UP INFO
                        </Header>
                      </Divider>
                      <Table definition>
                        <Table.Body>
                          <Table.Row>
                            <Table.Cell width={5}>Date</Table.Cell>
                            <Table.Cell>11/22/2019 - 5/1/2020</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Available Days</Table.Cell>
                            <Table.Cell>Monday, Wednesday, Friday</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>School Time</Table.Cell>
                            <Table.Cell>8:00AM - 4:00PM</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Number of Passenger</Table.Cell>
                            <Table.Cell>2</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Price per Ride</Table.Cell>
                            <Table.Cell>$3</Table.Cell>
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
                            <Table.Cell width={5}>Make</Table.Cell>
                            <Table.Cell>Toyota</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Model</Table.Cell>
                            <Table.Cell>Corolla</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Year</Table.Cell>
                            <Table.Cell>2015</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Number of Seats</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>

                      <Divider horizontal>
                        <Header as='h4'>
                          <Icon name='commenting' />
                          Comment
                        </Header>
                      </Divider>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

          </Container>
        </div>
    );
  }
}

export default DriverProfile;
