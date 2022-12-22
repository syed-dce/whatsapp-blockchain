import React, {useContext, useState} from 'react';

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
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {AppContext} from '../context/Context';
import Colors from '../constants/Colors';

const ImportKey = () => {
  const {viewState, setViewState} = useContext(AppContext);
  const [text, onChangeText] = useState('');

  const writeToFile = async () => {
    
    console.log("===== xxxxxxxxxx =======");
    console.log(text);

  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeading}>Import Key</Text>

      <TextInput
        style={styles.input}
        multiline={true}
        placeholder={'Paste your key here prefixed with 0x ....'}
        onChangeText={onChangeText}
        value={text}
      />
      <TouchableOpacity style={styles.button} onPress={writeToFile}>
        <Text style={styles.buttonText}>IMPORT</Text>
      </TouchableOpacity>

      {/* <Text style={styles.mainHeading}>Opening ...</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  input: {
    height: '40%',
    width: '100%',
    marginVertical: '10%',
    borderWidth: 4,
    borderColor: Colors.light.lightGreen,
    padding: 10,
    borderRadius: 20,
    color: 'grey'
  },
  mainHeading: {
    color: Colors.light.tint,
    // fontWeight: 'bold',
    fontSize: 20,
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

export default ImportKey;
