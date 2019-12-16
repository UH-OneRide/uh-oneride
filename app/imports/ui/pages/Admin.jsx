import React from 'react';
import { Container, Header, Card, Button } from 'semantic-ui-react';


/** A simple static component to render some text for the landing page. */
class Admin extends React.Component {
  render() {
    return (
        <div className="content">
          <Container className="content-container">
            <Header as="h1" textAlign="center">Admin - Contact List</Header>
            <Card.Group itemsPerRow={3}>
              <Card>
                <Card.Content className="card">
                  <Card.Header>Steve Sanders</Card.Header>
                  <Card.Meta>Created on 12/09/2019</Card.Meta>
                </Card.Content>
                <Card.Content extra className="card">
                  <div className='ui two buttons'>
                    <Button basic color='green'>
                      View
                    </Button>
                    <Button basic color='red'>
                      Delete
                    </Button>
                  </div>
                </Card.Content>
              </Card>

              <Card>
                <Card.Content className="card">
                  <Card.Header>Steve Sanders</Card.Header>
                  <Card.Meta>Created on 12/09/2019</Card.Meta>
                </Card.Content>
                <Card.Content extra className="card">
                  <div className='ui two buttons'>
                    <Button basic color='green'>
                      View
                    </Button>
                    <Button basic color='red'>
                      Delete
                    </Button>
                  </div>
                </Card.Content>
              </Card>

              <Card>
                <Card.Content className="card">
                  <Card.Header>Steve Sanders</Card.Header>
                  <Card.Meta>Created on 12/09/2019</Card.Meta>
                </Card.Content>
                <Card.Content extra className="card">
                  <div className='ui two buttons'>
                    <Button basic color='green'>
                      View
                    </Button>
                    <Button basic color='red'>
                      Delete
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
        </div>
/*        <Container>
          <Header as="h1" textAlign="center">Find a Ride</Header>
          <Card.Group>
            {this.props.offers.map((offer, index) => <Offer key={index} offer={offer}/>)}
          </Card.Group>
        </Container>
 */
    );
  }
}
export default Admin;
