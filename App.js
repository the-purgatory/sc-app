/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.View`
  background: crimson;
  padding: 4px;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 12px;
  text-align: center;
`;

const App = () => {
  return (
    <Wrapper>
      <Title>Hello Anqush</Title>
    </Wrapper>
  );
};

export default App;
