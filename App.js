import React from 'react';
import { NativeRouter as Router, Switch, Route } from 'react-router-native';

import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import AuthScreen from './src/screens/Auth';
import theme from './src/styles/theme';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path='/'>
              <AuthScreen />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}
