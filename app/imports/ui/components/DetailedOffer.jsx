import React from 'react';
import {
  Container,
  Grid,
  Segment,
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
import { getFormattedDate, getRideDays } from './Offer';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
export class DetailedOffer extends React.Component {
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
                    <span className='header-location' size='large'>
                      {this.props.offer.start} <Icon name='arrow right' /> {this.props.offer.destination}
                    </span>
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
                          <Table.Cell>{
                            getFormattedDate(this.props.offer.startDate)} - {getFormattedDate(this.props.offer.endDate)
                          }</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Available Days</Table.Cell>
                          <Table.Cell>{getRideDays(this.props.offer.days)}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>ETA</Table.Cell>
                          <Table.Cell>{this.props.offer.arrivalTime}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Number of Passenger</Table.Cell>
                          <Table.Cell>{this.props.offer.passengers}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Price per Ride</Table.Cell>
                          <Table.Cell>${this.props.offer.price}</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                    <Button fluid basic color='orange'><Icon name='save' />Save the Offer</Button><br/>

                    <Divider horizontal>
                      <Header as='h4'>
                        <Icon name='commenting' />
                        Description
                      </Header>
                    </Divider>
                    <p>{this.props.offer.description}</p>
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

/** Require a document to be passed to this component. */
DetailedOffer.propTypes = {
  userID: PropTypes.object.isRequired,
  offer: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(DetailedOffer);
