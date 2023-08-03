/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux-toolkit/store';
import {PersistGate} from 'redux-persist/integration/react';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const ReduxWrapper = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <SafeAreaProvider>
            <App />
          </SafeAreaProvider>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxWrapper);
