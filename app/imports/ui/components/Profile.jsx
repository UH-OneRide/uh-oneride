import React from 'react';
import {
  Container,
  Grid,
  Segment,
  Card,
  Image,
  Icon,
  Header,
  Button,
  Table,
  Divider,
  Comment,
  Form,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ProfileCard } from './ProfileCard';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
export class Profile extends React.Component {
  render() {
    return (
        <div className="content">
          <Container className="content-container">
            <Grid verticalAlign='top' textAlign='center' container>
              <Grid.Row>
                <Grid.Column width={5} verticalAlign='top'>
                  <ProfileCard userID={this.props.userID}/>
                </Grid.Column>

                <Grid.Column width={11} textAlign='left'>
                  <Segment attached className="padding-30">
                    <Image src='/images/car-image.jpg' verticalAlign='middle' size='tiny' circular />
                    <span className='header-location' size='large'>Hawaii Kai <Icon name='arrow right' /> UH Manoa (Round Trip)</span>
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
                          <Table.Cell>Type</Table.Cell>
                          <Table.Cell>Sedan</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Year</Table.Cell>
                          <Table.Cell>2015</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>

                    <Divider horizontal>
                      <Header as='h4'>
                        <Icon name='commenting' />
                        Description
                      </Header>
                    </Divider>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </Segment>
                  <br/>
                  <Segment attached className="padding-30">
                    <Comment.Group minimal>
                      <Header as='h3' dividing>
                        Comments
                      </Header>

                      <Comment>
                        <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                        <Comment.Content>
                          <Comment.Author as='a'>Matt</Comment.Author>
                          <Comment.Metadata>
                            <span>Today at 5:42PM</span>
                          </Comment.Metadata>
                          <Comment.Text>How artistic!</Comment.Text>
                        </Comment.Content>
                      </Comment>

                      <Comment>
                        <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                        <Comment.Content>
                          <Comment.Author as='a'>Elliot Fu</Comment.Author>
                          <Comment.Metadata>
                            <span>Yesterday at 12:30AM</span>
                          </Comment.Metadata>
                          <Comment.Text>This has been very useful for my research. Thanks as well!
                          </Comment.Text>
                        </Comment.Content>
                      </Comment>

                      <Comment>
                        <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                        <Comment.Content>
                          <Comment.Author as='a'>Jenny Hess</Comment.Author>
                          <Comment.Metadata>
                            <span>Just now</span>
                          </Comment.Metadata>
                          <Comment.Text>Elliot you are always so right :)</Comment.Text>
                        </Comment.Content>
                      </Comment>

                      <Comment>
                        <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                        <Comment.Content>
                          <Comment.Author as='a'>Joe Henderson</Comment.Author>
                          <Comment.Metadata>
                            <span>5 days ago</span>
                          </Comment.Metadata>
                          <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                        </Comment.Content>
                      </Comment>

                      <Form reply>
                        <Form.TextArea />
                        <Button content='Add a Comment' labelPosition='left' icon='edit' primary />
                      </Form>
                    </Comment.Group>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>

          </Container>
        </div>
    );
  }
}

/** Require a document to be passed to this component. */
Profile.propTypes = {
  userID: PropTypes.object.isRequired,
  offer: PropTypes.array,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Profile);
