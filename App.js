import {View, Text} from 'react-native';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import StackNavigation from './src/navigations/StackNavigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StackNavigation />
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  );
}
