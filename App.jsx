/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

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

import * as RNFS from 'react-native-fs';
import {AppContext} from './src/context/Context';
import LoggedOut from './src/screens/LoggedOut';
import AllAppTabs from './src/screens/AllAppTabs';
import Opening from './src/screens/Opening';

const App = () => {
  const [viewState, setViewState] = useState('Opening');

  const [infoState, setInfoState] = useState('');

  const value = {
    viewState,
    setViewState,
    infoState,
    setInfoState,
  };

  const checkLogIn = async () => {
    const KeyFilePath = RNFS.DocumentDirectoryPath + '/key.json';
    try {
      let res = await RNFS.readFile(KeyFilePath, 'ascii');
      console.log(res);
    } catch (err) {
      setViewState('LoggedOut');
      // try {
      //   (async () => {
      //     await generateKey();
      //     await RNFS.writeFile(KeyFilePath, privateKey, 'ascii');
      //   })();
      // } catch (err) {}
    }
    // return keyPair;
  };

  useEffect(() => {
    checkLogIn();
  }, []);

  return (
    <>
      <AppContext.Provider value={value}>
        {viewState === 'Opening' ? <Opening /> : <></>}
        {viewState === 'LoggedOut' ? <LoggedOut /> : <></>}
        {viewState === 'AllTabs' ? <AllAppTabs /> : <></>}
      </AppContext.Provider>
    </>
  );
};

export default App;
