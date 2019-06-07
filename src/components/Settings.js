import React from "react";
import { Grid, Menu, Header } from "semantic-ui-react";
import { Route } from "react-router-dom";
import About from "./Account/About";
import Photos from "./Account/Photos";
import Account from "./Account/Account";
import { NavLink, Redirect, Switch } from "react-router-dom";

const Settings = () => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from="/settings" to="settings/about" />
          <Route path="/settings/about" component={About} />
          <Route path="/settings/photos" component={Photos} />
          <Route path="/settings/account" component={Account} />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <Menu vertical>
          <Header
            icon="user"
            attached
            inverted
            color="grey"
            content="Profile"
          />
          <Menu.Item as={NavLink} to="/settings/about">
            About Me
          </Menu.Item>
          <Menu.Item as={NavLink} to="/settings/photos">
            My Photos
          </Menu.Item>
        </Menu>
        <Grid.Row />
        <Menu vertical>
          <Header
            icon="settings"
            attached
            inverted
            color="grey"
            content="Account"
          />
          <Menu.Item as={NavLink} to="/settings/account">
            My Account
          </Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid>
  );
};
export default Settings;
