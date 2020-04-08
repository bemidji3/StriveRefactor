import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import striveApp from "./redux/reducer";
import AppNavigator from "./components/AppNavigator/AppNavigator";

const store = createStore(striveApp);

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