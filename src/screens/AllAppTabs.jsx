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
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {AppContext} from '../context/Context';
import Home from './Home';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionic from 'react-native-vector-icons/Ionicons';
import BoxingIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
// import NFLScreen from './NFLScreen';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const AllAppTabs = () => {
  const {viewState, setViewState} = useContext(AppContext);

  return (
    <>
      <View style={styles.mainHeader}>
        <Text style={styles.whatsapp}>WhatsApp</Text>

        <View style={styles.headerSubContainer}>
          <Ionic
            name="search"
            color={'white'}
            size={24}
            style={styles.headerIcon}
          />
          <Entypo
            name="dots-three-vertical"
            color={'white'}
            size={24}
            style={styles.headerIcon}
          />
        </View>
      </View>
      <View style={{height: '90%'}}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Chats"
            screenOptions={{
              headerShown: true,
              tabBarActiveTintColor: 'white',
              tabBarIndicatorStyle: {
                backgroundColor: 'white',
                height: 3,
              },
              tabBarStyle: {
                backgroundColor: Colors.light.tint,
              },
            }}>
            <Tab.Screen
              name="Camera"
              component={HomeScreen}

              options={{
                tabBarIcon: ({color, size}) => (
                  <Entypo name="camera" color={color} size={20} />
                ),
                tabBarLabel: () => (
                  <View style={{textAlign: 'center', width: 20}}>
                      
                  </View>
                ), 
                
              }}
              
              
            />
            <Tab.Screen name="Chats" component={HomeScreen} />
            <Tab.Screen name="Status" component={SettingsScreen} />
            <Tab.Screen name="Calls" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainHeader: {
    height: '10%',
    backgroundColor: Colors.light.tint,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerSubContainer: {
    flexDirection: 'row',
  },
  headerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  whatsapp: {
    color: 'white',
    fontSize: 22,
  },
});

export default AllAppTabs;
