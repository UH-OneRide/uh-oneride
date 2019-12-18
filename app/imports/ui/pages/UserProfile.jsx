import React from 'react';
import { Container, Grid, Segment, Card, Image, Icon, Header, Button, Table, Divider, Form } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { ProfileCard } from '../components/ProfileCard';
import { Offers } from '../../api/offer/Offer';
import { UserInfo } from '../../api/user/User';
import { OfferOwnerCard } from '../components/OfferOwnerCard';

class UserProfile extends React.Component {
  render() {
    return (
        <div className="content">
          <Container className="content-container">
              <Grid verticalAlign='top' textAlign='center' container>
                <Grid.Row>
                  <Grid.Column width={5} verticalAlign='top'>
                    <Grid.Row>
                      <ProfileCard userID={this.props.profile}/>
                    </Grid.Row>
                      <Header as='h3'>YOUR OFFERS</Header>
                    <Card.Group itemsPerRow={1}>
                      {this.props.offers.map((offer, index) => <OfferOwnerCard
                          key={index}
                          offer={offer}
                      />)}
                    </Card.Group>
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
                            <Table.Cell>{this.props.profile.email}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>First Name</Table.Cell>
                            <Table.Cell>{this.props.profile.firstName}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Last Name</Table.Cell>
                            <Table.Cell>{this.props.profile.lastName}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Major/Area of Study/Job</Table.Cell>
                            <Table.Cell>{this.props.profile.job}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Interests and hobbies</Table.Cell>
                            <Table.Cell>{this.props.profile.hobbies}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell >Profile Image</Table.Cell>
                            <Table.Cell>
                              <Image
                                  size='mini'
                                  src={this.props.profile.image}
                              />
                            </Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
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
                      </Table>                      <Button fluid basic color='green'>Edit Profile</Button><br/>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

          </Container>
        </div>
    );
  }
}

UserProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  ready: PropTypes.bool.isRequired,
  offers: PropTypes.array.isRequired,
};

export default withTracker(({ match }) => {
  const documentId = match.params._id;
  const subscription = Meteor.subscribe('Offers');
  const subscription1 = Meteor.subscribe('UserInfo');
  return {
    offers: Offers.find({ ownerID: documentId }).fetch(),
    profile: UserInfo.findOne({ userID: documentId }),
    ready: subscription.ready() && subscription1.ready(),
  };
})(UserProfile);
