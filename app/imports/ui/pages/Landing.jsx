import React from 'react';
import { Grid, Image, Segment, Button, Header, Icon, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';


/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className="home">
          <Grid verticalAlign='middle' textAlign='center' container>
            <Grid.Row className="padding-30">
              <Grid.Column width={8}>
                <Segment className="home-box" rounded>
                  <Image src="/images/UH_logo.png" style={{ width: 160 }} centered/>
                  <Header as="h1">Commute Smart</Header>
                  <p>UH OneRide provides a solution to those looking for a transportation alternative, offering convenience,
                    safety, and a great opportunity to socialize with like people. Be a Rider, Driver, or both and easily
                    coordinate carpools for everyday classes, or one-time special event. Our service is exclusive to members
                    of the UH system; students, faculty, staff from all campuses can participate!</p>
                  <Button fluid positive as={NavLink} activeClassName="active" exact to="/signup" key='signup'>
                    <Icon name='user' /> SIGN UP TODAY!</Button>
                </Segment>
              </Grid.Column>
              <Grid.Column floated='right' width={8}>
                <Image src="/images/UHOneRide-network.png" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

export default Landing;
