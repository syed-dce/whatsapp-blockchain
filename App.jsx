/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {AppContext} from './src/context/Context';
import LoggedOut from './src/screens/LoggedOut';
import AllAppTabs from './src/screens/AllAppTabs';

const App = () => {
  const [viewState, setViewState] = useState('LoggedOut');

  const [infoState, setInfoState] = useState('');

  const value = {
    viewState,
    setViewState,
    infoState,
    setInfoState,
  };

  return (
    <>
      <AppContext.Provider value={value}>
        {viewState === 'LoggedOut' ? <LoggedOut /> : <></>}
        {viewState === 'AllTabs' ? <AllAppTabs /> : <></>}
      </AppContext.Provider>
    </>
  );
};

export default App;
