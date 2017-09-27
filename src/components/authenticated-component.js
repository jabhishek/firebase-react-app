import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {auth} from '../firebase';

export const AuthenticatedComponent = (Component) => {
  class Comp extends React.Component {
    checkAuth = (props) => {
      const user = auth.currentUser;
      if (!user) {
        props.push('/landing');
      }
    };

    componentDidMount () {
      this.checkAuth(this.props);
    }

    componentWillReceiveProps (nextProps) {
      this.checkAuth(nextProps);
    }

    render() {
      console.log('props', this.props);
      return <Component {...this.props}/>
    }
  }

  return connect(null, {push})(Comp);
};
