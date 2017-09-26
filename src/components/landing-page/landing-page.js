// @flow
import React from 'react';
import './landing-page.css';
import PageHeader from '../common/page-header/page-header';

export default class Signin extends React.Component<{}> {
  render() {
    return (
      <div>
        <div className="app">
          <div className="app--background">
            <div className="overlay"></div>
            <div className="app--content">
              <PageHeader/>
              <h1>Portfolio Manager</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
