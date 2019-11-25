import React from 'react';
import { Image, Grid, Menu } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
        <footer className="footerStyle">
          <Grid verticalAlign='middle' container>
            <Grid.Row>
              <Grid.Column width={8} >
          <Image src="/images/UH_logo.png" style={{ width: 50 }} verticalAlign='middle'/>
           <span> © UH One Ride 2019</span>
              </Grid.Column>
              <Grid.Column width={8}>
                <Menu text floated='right' >
                  <Menu.Item
                      name='Offer a Ride'
/>
                  <Menu.Item
                      name='Find a Ride'
                  />
                  <Menu.Item
                      name='About Us'
                  />
                  <Menu.Item
                      name='Contact Us'
                  />
                </Menu>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </footer>
    );
  }
}

export default Footer;
