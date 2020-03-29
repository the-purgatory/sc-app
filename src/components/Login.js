import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TouchableHighlight, Text, View } from 'react-native';
import styled from 'styled-components';
import * as Actions from '../actions';

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

const Title = styled.Text`
  color: #fff;
  font-size: 12px;
  text-align: center;
`;

class Login extends Component {
  onLogin = () => {
    const { login } = this.props;
    login({
      userName: 'test',
      password: 'password'
    });
  };

  render() {
    const { user } = this.props;
    return (
      <View>
        {!user.loggedIn ? (
          <TouchableHighlight onPress={this.onLogin}>
            <Text>Log In</Text>
          </TouchableHighlight>
        ) : (
          <Title>Hello Anqush</Title>
        )}
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
