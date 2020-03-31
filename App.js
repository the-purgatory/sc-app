/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import Login from './src/components/Login';

import store from './src/store';

const Wrapper = styled.View`
  background: crimson;
  padding: 10px;
`;

const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <Login />
      </Wrapper>
    </Provider>
  );
};

export default App;
