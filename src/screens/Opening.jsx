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

const Opening = () => {
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

      <Text style={styles.mainHeading}>Opening ...</Text>
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
    backgroundColor: Colors.light.lightGreen,
    width: Dimensions.get('window').width * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginVertical: 15,
  },
  buttonText: {
    color: 'white',
    // fontWeight: 'bold',
    fontSize: 13,
  },
});

export default Opening;
