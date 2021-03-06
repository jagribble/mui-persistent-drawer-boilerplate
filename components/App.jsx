// src/routes.js

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Template from './Template';
import Container from './Container';

const history = createBrowserHistory();

const menuItems = [{ url: '/', title: 'Home' }, { url: '/test', title: 'test' }];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <MuiThemeProvider>
        <Router history={history}>
          <div>
            <Route>
              <div>
                <Route
                  component={() => {
                    return (
                      <Template
                        open={this.state.open}
                        toggleDrawer={this.toggleDrawer}
                        title="mui-persistent-drawer-boilerplate"
                        navItems={menuItems}
                        history={history}
                      />
                    );
                  }}
                />
                <Container
                  open={this.state.open}
                >
                  <Route path="/" component={() => { return (<h1>Hello</h1>); }} />
                </Container>

              </div>
            </Route>
          </div>

        </Router>

      </MuiThemeProvider>
    );
  }
}
