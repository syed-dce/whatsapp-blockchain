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

const LoggedOut = () => {
  const {viewState, setViewState} = useContext(AppContext);

  const proceedClicked = () => {
    setViewState('AllTabs');
  };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        // source={require('../assets/bgstill3.jpeg')}
        >
        <View style={styles.topContainer}>
          <View style={styles.iconSubContainer}>
            
            <Image
              style={{width: '400%', height: '400%', resizeMode: 'contain'}}
              // source={require('../assets/logo2.png')}
            />
          </View>
          <Text style={styles.subHeading}>
            WHATSAPP ON BLOCKCHAIN
          </Text>
          <Text style={styles.subHeading}>
            WHATSAPP ON BLOCKCHAIN
          </Text>
        </View>

        <View style={styles.topContainer}>
          <TouchableOpacity style={styles.button} onPress={proceedClicked}>
            <Text style={styles.buttonText}>PROCEED</Text>
          </TouchableOpacity>
          <Text style={styles.subHeading2}>
            By pressing PROCEED you accept the Terms & Conditions and Privacy
            Policy
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  background: {
    flex: 1,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'space-between',
    // margin: 5,
  },
  topContainer: {
    // backgroundColor: 'yellow',
    margin: 40,
    alignItems: 'center',
  },
  iconSubContainer: {
    // backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.25,
    borderRadius: 30,
  },
  iconText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  subHeading: {
    color: 'white',
    marginTop: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  subHeading2: {
    color: 'white',
    marginTop: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'tomato',
    width: Dimensions.get('window').width * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default LoggedOut;
