import React from 'react';
import ReactDOM from 'react-dom';
import {Navigator} from 'react-onsenui';

import Login from './Login'
import SecondPage from './SecondPage'

export default class App extends React.Component {
  renderPage(route, navigator) {
    const props = route.props || {};
    props.navigator = navigator;

    return React.createElement(route.component, props);
  }

  render() {
    return (
      <Navigator initialRoute={{component: Login}} renderPage={this.renderPage} />
    );
  }
}