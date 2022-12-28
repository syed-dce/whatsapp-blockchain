import React, {useContext} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  ImageBackground,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {AppContext} from '../context/Context';
import Colors from '../constants/Colors';

const LoggedOut = () => {
  const {viewState, setViewState} = useContext(AppContext);

  const proceedClicked = () => {
    setViewState('AllTabs');
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeading}>WhatsApp on Blockchain</Text>
      <Image
        style={{width: '85%', height: '50%', resizeMode: 'contain'}}
        source={require('../assets/welcome.png')}
      />
      <TouchableOpacity style={styles.button} onPress={proceedClicked}>
        <Text style={styles.buttonText}>CREATE NEW ACCOUNT</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={proceedClicked}>
        <Text style={styles.buttonText}>SIGN-IN USING PRIVATE KEY</Text>
      </TouchableOpacity>

    </View> 
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  mainHeading: {
    color: Colors.light.tint,
    // fontWeight: 'bold',
    fontSize: 24,
  },
  button: {
    backgroundColor: Colors.light.tint,
    width: Dimensions.get('window').width * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginVertical: 15
  },
  buttonText: {
    color: 'white',
    // fontWeight: 'bold',
    fontSize: 13,
  },
});

export default LoggedOut;
