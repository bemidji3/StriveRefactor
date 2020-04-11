import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import striveApp from './redux/reducer';
import AppNavigator from './components/AppNavigator/AppNavigator';
import thunk from 'redux-thunk';

const store = createStore(striveApp, applyMiddleware(thunk));

export default function App() {
  return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});