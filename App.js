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
  padding: 4px;
  background: crimson;
`;

const Title = styled.Text`
  font-size: 12px;
  text-align: center;
  color: #fff;
`;

const App = () => {
  return (
    <Wrapper>
      <Title>Hello Anqush</Title>
    </Wrapper>
  );
};

export default App;
