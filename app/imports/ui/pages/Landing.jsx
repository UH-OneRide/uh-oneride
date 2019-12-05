import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Grid, Image, Segment, Button, Header, Icon } from 'semantic-ui-react';

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
                  <Button inverted><Icon name='car' /> I am a driver</Button><br/>
                  <Button inverted className="yellow-button"><Icon name='user' /> I am a passenger</Button>
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
